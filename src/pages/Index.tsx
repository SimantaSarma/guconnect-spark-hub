import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Sparkles, 
  Calendar, 
  Users, 
  ArrowRight,
  BookOpen,
  Target,
  Network
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Club Discovery',
      description: 'Let Gemini AI help you find the perfect clubs based on your interests and goals.',
      color: 'text-blue-600'
    },
    {
      icon: Calendar,
      title: 'Live Events Feed',
      description: 'Stay updated with the latest events, workshops, and activities across campus.',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Project Collaboration',
      description: 'Find collaborators for your projects or join exciting initiatives by other students.',
      color: 'text-purple-600'
    }
  ];

  const stats = [
    { number: '50+', label: 'Student Clubs' },
    { number: '200+', label: 'Active Students' },
    { number: '30+', label: 'Weekly Events' },
    { number: '100+', label: 'Projects Launched' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Welcome to{' '}
                <span className="bg-background text-background">
                  GUConnect
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Smartly discover clubs, events, and collaborators in your college
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/discover">
                  <Button 
                    size="lg" 
                    className="bg-university-gradient hover:opacity-90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-accent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-20 left-10 animate-float hidden lg:block">
            <div className="p-3 bg-blue-100 rounded-full">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="absolute top-32 right-16 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
            <div className="p-3 bg-green-100 rounded-full">
              <Target className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="absolute bottom-20 left-20 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
            <div className="p-3 bg-purple-100 rounded-full">
              <Network className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover opportunities, build connections, and make the most of your college experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className={`p-3 rounded-lg w-fit mb-4 ${feature.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-university-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your College Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already discovering new opportunities and building meaningful connections.
          </p>
          <Link to="/discover">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
