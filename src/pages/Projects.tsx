
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Plus, 
  Code, 
  Lightbulb, 
  Calendar,
  User,
  ExternalLink,
  Heart,
  MessageCircle,
  Sparkles
} from 'lucide-react';

const Projects = () => {
  // Sample projects data - in real app this would come from Firebase
  const projects = [
    {
      id: 1,
      title: "Campus Food Delivery App",
      description: "A mobile app to order food from campus canteens and local vendors. Looking for UI/UX designers and backend developers to join the team.",
      author: "Rahul Kumar (3rd Year CSE)",
      posted: "2 days ago",
      techStack: ["React Native", "Node.js", "MongoDB", "Firebase"],
      category: "Mobile App",
      status: "Looking for Team",
      likes: 12,
      comments: 8,
      skillsNeeded: ["UI/UX Design", "Backend Development", "Database Management"]
    },
    {
      id: 2,
      title: "AI-Powered Study Buddy",
      description: "An intelligent study companion that creates personalized quizzes and study schedules based on your learning patterns. Need ML engineers and frontend developers.",
      author: "Priya Singh (4th Year IT)",
      posted: "5 days ago",
      techStack: ["Python", "TensorFlow", "React", "FastAPI"],
      category: "AI/ML",
      status: "In Progress",
      likes: 18,
      comments: 14,
      skillsNeeded: ["Machine Learning", "Data Science", "Frontend Development"]
    },
    {
      id: 3,
      title: "Campus Event Management System",
      description: "A comprehensive platform for managing university events, club activities, and student registrations. Perfect for learning full-stack development.",
      author: "Amit Sharma (2nd Year CSE)",
      posted: "1 week ago",
      techStack: ["MERN Stack", "Socket.io", "Material-UI"],
      category: "Web App",
      status: "Just Started",
      likes: 9,
      comments: 5,
      skillsNeeded: ["Full Stack Development", "Database Design", "Real-time Features"]
    },
    {
      id: 4,
      title: "Sustainable Campus Initiative Tracker",
      description: "Track and gamify eco-friendly activities on campus. Monitor energy usage, waste reduction, and promote green initiatives among students.",
      author: "Neha Patel (3rd Year Environmental Science)",
      posted: "3 days ago",
      techStack: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      category: "Social Impact",
      status: "Looking for Team",
      likes: 15,
      comments: 11,
      skillsNeeded: ["Frontend Development", "Data Visualization", "Environmental Research"]
    },
    {
      id: 5,
      title: "Virtual Lab Simulator",
      description: "Interactive 3D simulations for physics and chemistry experiments. Great for students who want to learn WebGL and educational technology.",
      author: "Dr. Rajesh Gupta (Faculty Mentor)",
      posted: "4 days ago",
      techStack: ["Three.js", "WebGL", "React", "Node.js"],
      category: "EdTech",
      status: "Faculty Mentored",
      likes: 22,
      comments: 16,
      skillsNeeded: ["3D Graphics", "Educational Design", "Frontend Development"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Looking for Team':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Just Started':
        return 'bg-yellow-100 text-yellow-800';
      case 'Faculty Mentored':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai/ml':
        return <Sparkles className="h-4 w-4" />;
      case 'mobile app':
        return <Code className="h-4 w-4" />;
      case 'web app':
        return <Code className="h-4 w-4" />;
      default:
        return <Lightbulb className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-hero-pattern py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-university-gradient rounded-full mr-3">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              Share Your Project or Find One to Join
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaborate on exciting projects, learn new skills, and build something amazing together
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              Active Projects
            </h2>
            <p className="text-muted-foreground mt-1">
              {projects.length} projects looking for collaborators
            </p>
          </div>
          <Button 
            className="bg-university-gradient hover:opacity-90"
            size="lg"
          >
            <Plus className="mr-2 h-5 w-5" />
            Post New Project
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="flex items-center gap-1">
                        {getCategoryIcon(project.category)}
                        {project.category}
                      </Badge>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-foreground leading-tight mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      <span>{project.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{project.posted}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Skills Needed */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Looking for:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skillsNeeded.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-primary text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{project.comments}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Contact
                      </Button>
                      <Button size="sm" className="bg-university-gradient hover:opacity-90">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Join Project
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card className="p-4 text-center bg-white/60 backdrop-blur-sm">
            <div className="text-2xl font-bold text-blue-600 mb-1">2</div>
            <div className="text-sm text-muted-foreground">Web Apps</div>
          </Card>
          <Card className="p-4 text-center bg-white/60 backdrop-blur-sm">
            <div className="text-2xl font-bold text-green-600 mb-1">1</div>
            <div className="text-sm text-muted-foreground">Mobile Apps</div>
          </Card>
          <Card className="p-4 text-center bg-white/60 backdrop-blur-sm">
            <div className="text-2xl font-bold text-purple-600 mb-1">1</div>
            <div className="text-sm text-muted-foreground">AI/ML</div>
          </Card>
          <Card className="p-4 text-center bg-white/60 backdrop-blur-sm">
            <div className="text-2xl font-bold text-orange-600 mb-1">1</div>
            <div className="text-sm text-muted-foreground">EdTech</div>
          </Card>
          <Card className="p-4 text-center bg-white/60 backdrop-blur-sm">
            <div className="text-2xl font-bold text-pink-600 mb-1">1</div>
            <div className="text-sm text-muted-foreground">Social Impact</div>
          </Card>
        </div>

        {/* AI Suggestions Coming Soon */}
        <Card className="p-8 text-center bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-dashed border-primary/30">
          <div className="max-w-md mx-auto">
            <div className="p-3 bg-university-gradient rounded-full w-fit mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              AI-Powered Project Matching
            </h3>
            <p className="text-muted-foreground mb-4">
              Soon Gemini AI will suggest the perfect projects for your skills and recommend potential teammates!
            </p>
            <Button variant="outline" disabled>
              Smart Project Recommendations
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
