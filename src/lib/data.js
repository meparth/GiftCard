import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const INTEREST_OPTIONS = [
  { value: "sport", label: "Sports Superstar 🏅" },
  { value: "music", label: "Music Maestro 🎵" },
  { value: "travel", label: "Travel Buff ✈️" },
  { value: "food", label: "Food Fanatic 🍕" },
  { value: "book", label: "Book Lover 📚" },
  { value: "movie", label: "Movie Enthusiast 🎬" },
  { value: "art", label: "Art Admirer 🎨" },
];

export const OCCASION_OPTIONS = [
  { value: "birthday", label: "Birthday Bash 🎂" },
  { value: "anniversary", label: "Anniversary Adventure 💑" },
  { value: "graduation", label: "Graduation Glory 🎓" },
  { value: "thankyou", label: "Thank You Triumph 🙏" },
  { value: "getwell", label: "Get Well Gala 🤒" },
  { value: "holiday", label: "Holiday Hooray 🎄" },
  { value: "other", label: "Other (Mystery Event) 🎭" },
];