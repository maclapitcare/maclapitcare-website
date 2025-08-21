import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Calendar, User, Laptop } from "lucide-react";
import { format } from "date-fns";

interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  message?: string;
  createdAt: string;
}

interface ServiceRequest {
  id: string;
  name: string;
  phone: string;
  location: string;
  device: string;
  message: string;
  createdAt: string;
}

export default function Admin() {
  useEffect(() => {
    document.title = "Admin Dashboard - Form Submissions | Maclap IT Care";
  }, []);

  const { data: contactSubmissions, isLoading: contactsLoading } = useQuery<ContactSubmission[]>({
    queryKey: ['/api/contact-submissions'],
  });

  const { data: serviceRequests, isLoading: requestsLoading } = useQuery<ServiceRequest[]>({
    queryKey: ['/api/service-requests'],
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Admin Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Customer Contact Forms & Service Requests
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Submissions */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Mail className="h-6 w-6 mr-2 text-blue-600" />
              Contact Form Submissions
              {contactSubmissions && (
                <Badge className="ml-2">{contactSubmissions.length}</Badge>
              )}
            </h2>
            
            {contactsLoading ? (
              <Card>
                <CardContent className="p-6">
                  <p className="text-center text-muted-foreground">Loading contact submissions...</p>
                </CardContent>
              </Card>
            ) : contactSubmissions && contactSubmissions.length > 0 ? (
              <div className="space-y-4">
                {contactSubmissions.map((submission) => (
                  <Card key={submission.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg flex items-center">
                          <User className="h-5 w-5 mr-2 text-blue-600" />
                          {submission.name}
                        </CardTitle>
                        <Badge variant="outline">
                          {format(new Date(submission.createdAt), 'MMM dd, yyyy HH:mm')}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="h-4 w-4 text-green-600" />
                        <span className="font-semibold">{submission.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="h-4 w-4 text-orange-600" />
                        <span>{submission.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-red-600" />
                        <span>{submission.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Laptop className="h-4 w-4 text-purple-600" />
                        <span className="font-medium">{submission.service}</span>
                      </div>
                      {submission.message && (
                        <>
                          <Separator />
                          <div className="text-sm">
                            <p className="font-semibold text-muted-foreground mb-1">Message:</p>
                            <p className="bg-gray-50 p-2 rounded text-foreground">{submission.message}</p>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-6">
                  <p className="text-center text-muted-foreground">No contact submissions yet.</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Service Requests */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Laptop className="h-6 w-6 mr-2 text-green-600" />
              Service Requests
              {serviceRequests && (
                <Badge className="ml-2">{serviceRequests.length}</Badge>
              )}
            </h2>
            
            {requestsLoading ? (
              <Card>
                <CardContent className="p-6">
                  <p className="text-center text-muted-foreground">Loading service requests...</p>
                </CardContent>
              </Card>
            ) : serviceRequests && serviceRequests.length > 0 ? (
              <div className="space-y-4">
                {serviceRequests.map((request) => (
                  <Card key={request.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg flex items-center">
                          <User className="h-5 w-5 mr-2 text-green-600" />
                          {request.name}
                        </CardTitle>
                        <Badge variant="outline">
                          {format(new Date(request.createdAt), 'MMM dd, yyyy HH:mm')}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="h-4 w-4 text-green-600" />
                        <span className="font-semibold">{request.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-red-600" />
                        <span>{request.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Laptop className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">{request.device}</span>
                      </div>
                      <Separator />
                      <div className="text-sm">
                        <p className="font-semibold text-muted-foreground mb-1">Issue Description:</p>
                        <p className="bg-gray-50 p-2 rounded text-foreground">{request.message}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-6">
                  <p className="text-center text-muted-foreground">No service requests yet.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Instructions */}
        <Card className="mt-8 border-yellow-200 bg-yellow-50">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">⚠️ Important Note</h3>
            <p className="text-yellow-700 mb-2">
              <strong>Current Setup:</strong> Form data is stored in memory and will be lost when the server restarts.
            </p>
            <p className="text-yellow-700">
              <strong>To Receive Notifications:</strong> Set up email integration or database storage for permanent data retention.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}