import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";
import detail from "@/assets/detail-joinery.jpg";
import pieceWegner from "@/assets/piece-wegner.jpg";
import pieceJuhl from "@/assets/piece-juhl.jpg";
import pieceMogensen from "@/assets/piece-mogensen.jpg";
import pieceBaughman from "@/assets/piece-baughman.jpg";
import pieceGrossman from "@/assets/piece-grossman.jpg";
import pieceNelson from "@/assets/piece-nelson.jpg";
import pieceKofodLarsen from "@/assets/piece-kofod-larsen.jpg";
import pieceKnoll from "@/assets/piece-knoll.jpg";
import type { Piece } from "@/components/product-card";


export const pieces: Piece[] = [
  {
    slug: "teak-dining-table-moller",
    designer: "Niels Otto Møller",
    name: "Teak Dining Table, Model 12",
    origin: "Denmark, c. 1962",
    price: "$4,850",
    image: p1,
  },
  {
    slug: "rosewood-swivel-lounge-chair",
    designer: "Hans J. Wegner",
    name: "Rosewood & Leather Swivel Lounge Chair",
    origin: "Denmark, c. 1965",
    price: "$7,200",
    image: p2,
  },
  {
    slug: "teak-credenza-mogensen",
    designer: "Børge Mogensen",
    name: "Teak Credenza with Sliding Doors",
    origin: "Denmark, c. 1958",
    price: "$6,400",
    image: p3,
  },
  {
    slug: "brass-floor-lamp-fog-morup",
    designer: "Fog & Mørup",
    name: "Patinated Brass Floor Lamp",
    origin: "Denmark, c. 1960",
    price: "$2,150",
    image: p4,
  },
];

export const restorationImages = { before, after, detail };

export const designers = [
  {
    name: "Hans J. Wegner",
    years: "1914 – 2007",
    bio: "The master of the chair — over 500 designs built on joinery so exact it needs no ornament.",
    image: designerWegner,
  },
  {
    name: "Finn Juhl",
    years: "1912 – 1989",
    bio: "Sculptural, almost surrealist forms that freed the seat and back from the frame.",
    image: designerJuhl,
  },
  {
    name: "Børge Mogensen",
    years: "1914 – 1972",
    bio: "Honest oak and teak cabinetry designed for real Danish homes, built to outlive them.",
    image: designerMogensen,
  },
  {
    name: "Milo Baughman",
    years: "1923 – 2003",
    bio: "American mid-century warmth: low profiles, chrome, and California ease.",
    image: designerBaughman,
  },
  {
    name: "Greta M. Grossman",
    years: "1906 – 1999",
    bio: "Swedish-Californian modernism: playful lines, brass necks, and the light of the West Coast.",
    image: designerGrossman,
  },
  {
    name: "George Nelson",
    years: "1908 – 1986",
    bio: "Architect, writer, and design director who gave American modernism its optimistic clarity.",
    image: designerNelson,
  },
  {
    name: "Ib Kofod-Larsen",
    years: "1921 – 2003",
    bio: "Danish sculptural seating and cabinetry, refined for Swedish production and global living.",
    image: designerKofodLarsen,
  },
  {
    name: "Florence Knoll",
    years: "1917 – 2019",
    bio: "The planning unit that defined the modern office — disciplined, elegant, impeccably proportioned.",
    image: designerKnoll,
  },
];

