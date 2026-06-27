import {
  Bundle,
  Network,
} from "@/types/data";

export const networks: Network[] = [
  {
    id: "mtn",
    name: "MTN",
    color: "bg-yellow-400",
  },

  {
    id: "airtel",
    name: "Airtel",
    color: "bg-red-500",
  },

  {
    id: "glo",
    name: "Glo",
    color: "bg-green-500",
  },

  {
    id: "9mobile",
    name: "9mobile",
    color: "bg-black",
  },
];

export const bundles: Bundle[] = [
  {
    id: "1",
    name: "500MB",
    validity: "Valid for 1 day",
    amount: 150,
    category: "Daily",
  },

  {
    id: "2",
    name: "1GB",
    validity: "Valid for 1 day",
    amount: 300,
    category: "Daily",
  },

  {
    id: "3",
    name: "2GB",
    validity: "Valid for 7 days",
    amount: 600,
    category: "Weekly",
  },

  {
    id: "4",
    name: "5GB",
    validity: "Valid for 30 days",
    amount: 1500,
    category: "Monthly",
  },

  {
    id: "5",
    name: "10GB",
    validity: "Valid for 30 days",
    amount: 2500,
    category: "Monthly",
  },

  {
    id: "6",
    name: "20GB",
    validity: "Valid for 30 days",
    amount: 4500,
    category: "Monthly",
  },
];