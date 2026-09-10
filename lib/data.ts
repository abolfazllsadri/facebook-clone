import {
  FaceSmileIcon,
  PhotoIcon,
  VideoCameraIcon,
  BookmarkIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  ClockIcon,
  MegaphoneIcon,
  NewspaperIcon,
  PlayCircleIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UsersIcon,
  HomeIcon as HomeSolid,
  PlayCircleIcon as PlayCircleSolid,
  UserGroupIcon as UserGroupSolid,
  UsersIcon as UsersSolid,
  Squares2X2Icon as Squares2X2Solid,
} from "@heroicons/react/24/solid";
import {
  PlayCircleIcon as PlayCircleOutline,
  UserGroupIcon as UserGroupOutline,
  UsersIcon as UsersOutline,
  HomeIcon as HomeOutline,
  HomeIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

type Contact = {
  id: string;
  name: string;
  avatarUrl: string;
  isOnline: boolean;
};

type Group = {
  id: string;
  name: string;
  members: Omit<Contact, "id" | "isOnline">[];
};

export const actionsData = [
  {
    label: "Live video",
    Icon: VideoCameraIcon,
    color: "red",
  },
  {
    label: "Photo/video",
    Icon: PhotoIcon,
    color: "green",
  },
  {
    label: "Feeling/activity",
    Icon: FaceSmileIcon,
    color: "yellow",
  },
] as const;

export const navItems = [
  { href: "/friends", label: "Friends", icon: UserGroupIcon },
  { label: "Memories", icon: ClockIcon },
  { label: "Saved", icon: BookmarkIcon },
  { href: "/groups", label: "Groups", icon: UsersIcon },
  { href: "/reels", label: "Reels", icon: PlayCircleIcon },
  { label: "Marketplace", icon: ShoppingBagIcon },
  { label: "Feeds", icon: NewspaperIcon },
  { label: "Events", icon: CalendarDaysIcon },
  { label: "Ads Manager", icon: MegaphoneIcon },
  { label: "See more", icon: ChevronDownIcon },
];

export const mobileNavItems = [
  {
    label: "Home",
    href: "/",
    icons: { solid: HomeSolid, outline: HomeIcon },
  },
  {
    label: "Reels",
    href: "/reels",
    icons: { solid: PlayCircleSolid, outline: PlayCircleIcon },
  },
  {
    label: "Friends",
    href: "/friends",
    icons: { solid: UsersSolid, outline: UsersIcon },
  },
  {
    label: "Groups",
    href: "/groups",
    icons: { solid: UserGroupSolid, outline: UserGroupIcon },
  },
  {
    label: "Menu",
    href: null,
    icons: { solid: Squares2X2Solid, outline: Squares2X2Icon },
  },
] as const;

export const headerItems = [
  {
    href: "/",
    title: "Home",
    icons: { solid: HomeSolid, outline: HomeOutline },
  },
  {
    href: "/reels",
    title: "Reels",
    icons: { solid: PlayCircleSolid, outline: PlayCircleOutline },
  },
  {
    href: "/friends",
    title: "Friends",
    icons: { solid: UsersSolid, outline: UsersOutline },
  },
  {
    href: "/groups",
    title: "Groups",
    icons: { solid: UserGroupSolid, outline: UserGroupOutline },
  },
] as const;

export const storiesData = [
  {
    id: 1,
    name: "Mark Zuckerberg",
    avatar: "/images/zuckerburg.jpg",
    story: "/images/stories/zuckerburg.jpg",
  },
  {
    id: 2,
    name: "Bill Gates",
    avatar: "/images/billgates.jpg",
    story: "/images/stories/billgates.jpg",
  },
  {
    id: 3,
    name: "Netflix",
    avatar: "/images/netflix.jpg",
    story: "/images/stories/netflix.jpg",
  },
  {
    id: 4,
    name: "Call of Duty",
    avatar: "/images/callofduty.jpg",
    story: "/images/stories/callofduty.jpg",
  },
  {
    id: 5,
    name: "Cristiano Ronaldo",
    avatar: "/images/ronaldo.jpg",
    story: "/images/stories/ronaldo.jpg",
  },
] as const;

export const contactsData: Contact[] = [
  {
    id: "1",
    name: "Elon Musk",
    avatarUrl: "/images/contacts/elon-musk.jpg",
    isOnline: true,
  },
  {
    id: "2",
    name: "Bill Gates",
    avatarUrl: "/images/contacts/bill-gates.jpg",
    isOnline: true,
  },
  {
    id: "3",
    name: "Satya Nadella",
    avatarUrl: "/images/contacts/satya-nadella.jpg",
    isOnline: false,
  },
  {
    id: "4",
    name: "Sundar Pichai",
    avatarUrl: "/images/contacts/sundar-pichai.jpg",
    isOnline: true,
  },
  {
    id: "5",
    name: "Mark Zuckerberg",
    avatarUrl: "/images/contacts/mark-zuckerberg.jpg",
    isOnline: false,
  },
  {
    id: "6",
    name: "Tim Cook",
    avatarUrl: "/images/contacts/tim-cook.jpg",
    isOnline: true,
  },
] as const;

export const groupsData: Group[] = [
  {
    id: "1",
    name: "Open Source Devs",
    members: [
      {
        name: "Satya Nadella",
        avatarUrl: "/images/contacts/satya-nadella.jpg",
      },
      {
        name: "Sundar Pichai",
        avatarUrl: "/images/contacts/sundar-pichai.jpg",
      },
      {
        name: "Mark Zuckerberg",
        avatarUrl: "/images/contacts/mark-zuckerberg.jpg",
      },
    ],
  },
  {
    id: "4",
    name: "Next.js group",
    members: [
      {
        name: "Satya Nadella",
        avatarUrl: "/images/contacts/satya-nadella.jpg",
      },
      {
        name: "Sundar Pichai",
        avatarUrl: "/images/contacts/sundar-pichai.jpg",
      },
      {
        name: "Mark Zuckerberg",
        avatarUrl: "/images/contacts/mark-zuckerberg.jpg",
      },
    ],
  },
  {
    id: "5",
    name: "Typescript group",
    members: [
      { name: "Elon Musk", avatarUrl: "/images/contacts/elon-musk.jpg" },
      { name: "Bill Gates", avatarUrl: "/images/contacts/bill-gates.jpg" },
    ],
  },
] as const;
