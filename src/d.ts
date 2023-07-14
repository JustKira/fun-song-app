import { v4 as uuidv4 } from "uuid";
import { Song } from "../types";
export const MusicD: Song[] = [
  {
    name: "Beautiful",
    cover:
      "https://chillhop.com/wp-content/uploads/2023/06/9180a7fabdc07fe2e221bb26bdd477cb66f6b69e-1024x1024.jpg",
    artist: "C Y G N",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=60571",
    color: ["#051D1F", "#B58232"],
    id: uuidv4(),
    active: true,
  },
  {
    name: "It’s Okay",
    cover:
      "https://chillhop.com/wp-content/uploads/2023/05/5683fa8ae05221c0d06eeedd90fe00e653d27c48-1024x1024.jpg",
    artist: "Yasper",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=55163",
    color: ["#241A1B", "#FDEB9A"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "The Loveliest Dream",
    cover:
      "https://chillhop.com/wp-content/uploads/2022/10/8b7ba4cdad98f47e0411cfe94c50cce4a68cb848-1024x1024.jpg",
    artist: "Sofasound",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=45155",
    color: ["#628FCA", "#B595C4"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Take it Easy",
    cover:
      "https://chillhop.com/wp-content/uploads/2023/06/9180a7fabdc07fe2e221bb26bdd477cb66f6b69e-1024x1024.jpg",
    artist: "C Y G N",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=60617",
    color: ["#051D1F", "#B58232"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Let it go",
    cover:
      "https://chillhop.com/wp-content/uploads/2023/05/5683fa8ae05221c0d06eeedd90fe00e653d27c48-1024x1024.jpg",
    artist: "C Y G N",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=60622",
    color: ["#241A1B", "#FDEB9A"],
    id: uuidv4(),
    active: false,
  },
];
