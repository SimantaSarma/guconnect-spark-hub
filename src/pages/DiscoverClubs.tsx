
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Sparkles, 
  Loader2, 
  Robot, 
  Users, 
  Code, 
  Palette,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

const DiscoverClubs = () => {
  const [interests, setInterests] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [loading, setLoading] = useState(false);
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);

  // Sample clubs for demonstration
  const sampleClubs = [
    {
      name: "Tech Innovation Club",
      description: "Perfect for CSE students interested in AI, coding competitions, and startup projects.",
      icon: Code,
      color: "text-blue-600 bg-blue-100"
    },
    {
      name: "Creative Arts Society",
      description: "Ideal for students passionate about design, photography, and creative expression.",
      icon: Palette,
      color: "text-purple-600 bg-purple-100"
    },
    {
      name: "Student Leadership Forum",
      description: "Great for networking, leadership development, and organizing campus events.",
      icon: Users,
      color: "text-green-600 bg-green-100"
    }
  ];

  const handleFindClubs = async () => {
    if (!interests.trim()) {
      alert('Please tell us about your interests first!');
      return;
    }

    setLoading(true);
    
    try {
      if (apiKey) {
        // Try to use actual Gemini API
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `Based on this student's interests: "${interests}", recommend 2-3 student clubs or communities they should join in college. For each recommendation, provide:
1. Club name
2. Brief description (2-3 sentences)
3. Why it matches their interests

Student context: ${interests}

Format your response in a friendly, encouraging tone as if you're a senior student giving advice.`
              }]
            }]
          })
        });

        const data = await response.json();
        
        if (data.candidates && data.candidates[0]) {
          setRecommendations(data.candidates[0].content.parts[0].text);
        } else {
          throw new Error('Failed to get recommendations');
        }
      } else {
        // Demo mode - simulate AI response
        setTimeout(() => {
          setRecommendations(`🤖 **Gemini AI Recommendations for You:**

**1. Tech Innovation Club**
This club is perfect for your interest in coding and AI! They regularly organize hackathons, AI workshops, and coding competitions. You'll get hands-on experience with latest technologies and network with like-minded peers.

**2. Computer Science Society**
As a CSE student, this is your home base! They offer technical workshops, industry talks, and project collaboration opportunities. Great for academic support and career guidance.

**3. Entrepreneurship Cell**
Your interest in networking and innovation makes this club ideal. They host startup competitions, mentorship programs, and connect students with industry professionals.

These clubs align perfectly with your technical interests and career goals! 🚀`);
          setLoading(false);
        }, 2000);
        return;
      }
    } catch (error) {
      console.error('Error:', error);
      // Fallback to demo recommendations
      setRecommendations(`🤖 **Recommended Clubs Based on Your Interests:**

Based on what you've shared, here are some clubs that would be perfect for you:

**Tech Innovation Club** - Great for coding enthusiasts and AI learners
**Creative Arts Society** - Perfect for creative expression and design
**Student Leadership Forum** - Ideal for networking and leadership development

*Note: Using demo mode. Add your Gemini API key for personalized AI recommendations!*`);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-hero-pattern py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-university-gradient rounded-full mr-3">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              Let's Find the Right Club for You
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us about your interests, and our AI will recommend the perfect student communities for you
          </p>
        </div>

        {/* API Key Input (for prototype) */}
        {showApiKeyInput && (
          <Card className="mb-8 border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Robot className="mr-2 h-5 w-5" />
                Gemini AI Setup (Optional)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="apiKey" className="text-blue-700">
                    Gemini API Key (for personalized recommendations)
                  </Label>
                  <Input
                    id="apiKey"
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your Gemini API key (optional)"
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowApiKeyInput(false)}
                    className="text-blue-700 border-blue-300"
                  >
                    Use Demo Mode
                  </Button>
                  {apiKey && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowApiKeyInput(false)}
                      className="text-blue-700 border-blue-300"
                    >
                      Save & Continue
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Input Section */}
        <Card className="mb-8 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Tell Us About Yourself
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="interests" className="text-lg font-medium">
                What are your interests, department, and college goals?
              </Label>
              <Textarea
                id="interests"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                placeholder="Example: I'm a 1st year CSE student interested in coding, AI, and networking. I want to build projects, learn new technologies, and connect with like-minded students..."
                className="mt-2 min-h-[120px] text-base"
              />
            </div>
            
            <Button 
              onClick={handleFindClubs}
              disabled={loading}
              size="lg"
              className="w-full bg-university-gradient hover:opacity-90 text-lg py-6"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Finding Perfect Clubs...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Find My Clubs
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        {recommendations && (
          <Card className="mb-8 shadow-lg border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Robot className="mr-2 h-6 w-6" />
                Recommended for You by Gemini AI 🤖
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap text-foreground bg-transparent border-none p-0 font-sans leading-relaxed">
                  {recommendations}
                </pre>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Sample Clubs Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Popular Clubs at Gauhati University
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sampleClubs.map((club, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className={`p-3 rounded-lg w-fit mb-4 ${club.color}`}>
                    <club.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {club.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {club.description}
                  </p>
                  <Button variant="outline" className="mt-4 w-full" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Alert */}
        <Alert className="bg-yellow-50 border-yellow-200">
          <AlertCircle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            This is a prototype version. For personalized AI recommendations, add your Gemini API key above. 
            In demo mode, you'll see sample recommendations based on common student interests.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default DiscoverClubs;
