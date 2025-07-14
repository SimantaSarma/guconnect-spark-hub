
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Plus,
  Sparkles,
  Code,
  Palette,
  MessageSquare
} from 'lucide-react';

const Events = () => {
  // Sample events data - in real app this would come from Firebase
  const upcomingEvents = [
    {
      id: 1,
      title: "AI Workshop: Introduction to Machine Learning",
      date: "2024-01-20",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab, Block A",
      organizer: "Tech Innovation Club",
      description: "Learn the fundamentals of machine learning with hands-on coding examples.",
      type: "Workshop",
      category: "technical",
      attendees: 45
    },
    {
      id: 2,
      title: "Annual Cultural Fest - Registration Open",
      date: "2024-01-25",
      time: "10:00 AM - 6:00 PM",
      location: "Main Auditorium",
      organizer: "Cultural Committee",
      description: "Showcase your talents in music, dance, drama, and art competitions.",
      type: "Competition",
      category: "cultural",
      attendees: 200
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      date: "2024-01-28",
      time: "1:00 PM - 4:00 PM",
      location: "Seminar Hall",
      organizer: "Entrepreneurship Cell",
      description: "Present your startup ideas to industry experts and win exciting prizes.",
      type: "Competition",
      category: "business",
      attendees: 30
    },
    {
      id: 4,
      title: "Photography Walk: Campus Chronicles",
      date: "2024-01-30",
      time: "7:00 AM - 10:00 AM",
      location: "Campus Grounds",
      organizer: "Photography Club",
      description: "Capture the beauty of our campus while learning professional photography techniques.",
      type: "Activity",
      category: "creative",
      attendees: 25
    },
    {
      id: 5,
      title: "Career Guidance Session: Tech Industry Insights",
      date: "2024-02-02",
      time: "3:00 PM - 5:00 PM",
      location: "Lecture Hall 1",
      organizer: "Placement Cell",
      description: "Industry professionals share insights about career opportunities in tech.",
      type: "Seminar",
      category: "career",
      attendees: 80
    }
  ];

  const getEventIcon = (category: string) => {
    switch (category) {
      case 'technical':
        return <Code className="h-4 w-4" />;
      case 'creative':
        return <Palette className="h-4 w-4" />;
      case 'business':
        return <Users className="h-4 w-4" />;
      default:
        return <Sparkles className="h-4 w-4" />;
    }
  };

  const getEventColor = (category: string) => {
    switch (category) {
      case 'technical':
        return 'bg-blue-100 text-blue-800';
      case 'creative':
        return 'bg-purple-100 text-purple-800';
      case 'business':
        return 'bg-green-100 text-green-800';
      case 'cultural':
        return 'bg-pink-100 text-pink-800';
      case 'career':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-hero-pattern py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-university-gradient rounded-full mr-3">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              Upcoming Events Around Campus
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest workshops, competitions, and activities from student communities
          </p>
        </div>

        {/* Add New Event Button (for admins) */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              This Week's Events
            </h2>
            <p className="text-muted-foreground mt-1">
              {upcomingEvents.length} events happening soon
            </p>
          </div>
          <Button 
            className="bg-university-gradient hover:opacity-90"
            size="lg"
          >
            <Plus className="mr-2 h-5 w-5" />
            Add New Event
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {upcomingEvents.map((event) => (
            <Card 
              key={event.id} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getEventColor(event.category)}>
                        {getEventIcon(event.category)}
                        <span className="ml-1 capitalize">{event.category}</span>
                      </Badge>
                      <Badge variant="outline">
                        {event.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-foreground leading-tight">
                      {event.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span className="font-medium">{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.attendees} students interested</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Organized by</p>
                      <p className="font-medium text-foreground">{event.organizer}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Ask Questions
                      </Button>
                      <Button size="sm" className="bg-university-gradient hover:opacity-90">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center bg-white/60 backdrop-blur-sm">
            <div className="text-2xl font-bold text-blue-600 mb-1">5</div>
            <div className="text-sm text-muted-foreground">Events This Week</div>
          </Card>
          <Card className="p-4 text-center bg-white/60 backdrop-blur-sm">
            <div className="text-2xl font-bold text-green-600 mb-1">12</div>
            <div className="text-sm text-muted-foreground">Active Clubs</div>
          </Card>
          <Card className="p-4 text-center bg-white/60 backdrop-blur-sm">
            <div className="text-2xl font-bold text-purple-600 mb-1">380</div>
            <div className="text-sm text-muted-foreground">Total Attendees</div>
          </Card>
          <Card className="p-4 text-center bg-white/60 backdrop-blur-sm">
            <div className="text-2xl font-bold text-orange-600 mb-1">15</div>
            <div className="text-sm text-muted-foreground">Upcoming Events</div>
          </Card>
        </div>

        {/* Coming Soon */}
        <Card className="p-8 text-center bg-gradient-to-r from-blue-50 to-green-50 border-2 border-dashed border-primary/30">
          <div className="max-w-md mx-auto">
            <div className="p-3 bg-university-gradient rounded-full w-fit mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Firebase Integration Coming Soon!
            </h3>
            <p className="text-muted-foreground mb-4">
              Soon you'll be able to add, edit, and manage events in real-time with Firebase integration.
            </p>
            <Button variant="outline" disabled>
              Live Event Management
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Events;
