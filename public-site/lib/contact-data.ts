export interface Branch {
  id: string
  name: string
  address: string
  city: string
  phone: string
  email: string
  hours: string
  coordinates: {
    lat: number
    lng: number
  }
}

export const branches: Branch[] = [
  {
    id: "main",
    name: "SagalJet Main Office",
    address: "123 Print Street",
    city: "New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "main@sagaljet.com",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM",
    coordinates: { lat: 40.7589, lng: -73.9851 },
  },
  {
    id: "brooklyn",
    name: "SagalJet Brooklyn",
    address: "456 Design Avenue",
    city: "Brooklyn, NY 11201",
    phone: "+1 (555) 234-5678",
    email: "brooklyn@sagaljet.com",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM",
    coordinates: { lat: 40.6782, lng: -73.9442 },
  },
  {
    id: "queens",
    name: "SagalJet Queens",
    address: "789 Creative Boulevard",
    city: "Queens, NY 11354",
    phone: "+1 (555) 345-6789",
    email: "queens@sagaljet.com",
    hours: "Mon-Fri: 8:30 AM - 5:30 PM",
    coordinates: { lat: 40.7282, lng: -73.7949 },
  },
]
