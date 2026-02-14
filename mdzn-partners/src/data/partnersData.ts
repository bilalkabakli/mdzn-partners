export interface Brand {
  name: string;
  logoUrl: string | null;
  initials?: string;
}

export interface UpcomingBrand {
  name: string;
  initials: string;
  bgColor: string;
  textColor: string;
}

export const activeBrands: Brand[] = [
  { name: "Proteinocean", logoUrl: "https://cdn.myikas.com/images/theme-images/7864530e-8b30-485e-9d6b-28c0cbb9e41a/image_180.webp" },
  { name: "The Ceel", logoUrl: null, initials: "TC" },
  { name: "Fropie", logoUrl: "https://cdn.myikas.com/images/theme-images/cdfd5751-f1f0-43ad-8070-18ddf996c3f3/image_3840.webp" },
  { name: "Paen", logoUrl: "https://paen.com/images/theme-images/cc0fc79c-7354-4660-80ff-1babcbbf0d7b/image_1080.webp" },
  { name: "IAMNOTBASIC", logoUrl: "https://cdn.myikas.com/images/theme-images/9e45a8f6-d456-4093-9ba2-fcfedec2f624/image_3840.webp" },
  { name: "VOIDTR", logoUrl: "https://cdn.myikas.com/images/theme-images/7883e079-85e3-4c6f-b522-92fa684ac4ef/image_3840.webp" },
  { name: "Brandspure", logoUrl: "https://cdn.myikas.com/images/theme-images/9def1ae0-e4c2-45c9-8e0d-461481ae9753/image_3840.webp" },
  { name: "Samuraysport", logoUrl: "https://cdn.myikas.com/images/theme-images/93157ff4-e7ca-421a-a8ff-a7d11127c8cd/image_3840.webp" },
  { name: "MeggDecor", logoUrl: "https://cdn.myikas.com/images/theme-images/91805482-1ec0-4153-b1b1-51051934db6c/image_1080.webp" },
  { name: "La Fae Beaute", logoUrl: "https://cdn.myikas.com/images/theme-images/87f08d17-d811-4892-a146-7588a20b40ac/image_3840.webp" },
  { name: "Online Ciftci", logoUrl: "https://cdn.myikas.com/images/theme-images/dfea5666-72fb-427a-b39d-53a25398cdfd/image_540.webp" },
  { name: "Aysheguls", logoUrl: "https://cdn.myikas.com/images/theme-images/eab3f97d-d18d-4707-8ede-fdf9090238ac/image_3840.webp" },
  { name: "Cotton Cloth", logoUrl: "https://cdn.myikas.com/images/theme-images/78f405e7-c294-478c-88bd-7aeaa2cd65d9/image_3840.webp" },
  { name: "Yagmur Butik", logoUrl: "https://cdn.myikas.com/images/theme-images/b65f7b33-8989-4e65-9d3d-02b7d9bdfd06/image_3840.webp" },
  { name: "Gulcan Hanim", logoUrl: "https://cdn.myikas.com/images/theme-images/270726cd-abb1-4c3e-ae0a-84aa66ea6f1e/image_3840.webp" },
  { name: "Sakli Butik", logoUrl: "https://cdn.myikas.com/images/theme-images/59e37c57-74d6-4020-ad2a-b3fb66d60ade/image_3840.webp" },
  { name: "Ceylan Orhanli", logoUrl: "https://cdn.myikas.com/images/theme-images/704cda03-ed08-4d48-bd75-79b068d39fff/image_3840.webp" },
  { name: "Animal Joy", logoUrl: "https://cdn.myikas.com/images/theme-images/d985b24f-b578-42a6-a9b7-ac33722811e8/image_3840.webp" },
  { name: "Hugsgifts", logoUrl: "https://cdn.myikas.com/images/theme-images/c64f5d4e-c88f-4767-8f88-9b1b3edb406e/image_3840.webp" },
  { name: "BELLORE", logoUrl: "https://cdn.myikas.com/images/theme-images/9c862dd4-56a6-48f7-82fc-2f2fc095875d/image_3840.webp" },
  { name: "Petgross", logoUrl: "https://cdn.myikas.com/images/095577b2-7631-4970-aac8-f67dc0fdb305/cd5579a1-b1d7-456a-a888-ec8dda12945e/image_1080.webp" },
  { name: "Nermin Hanim", logoUrl: "https://cdn.myikas.com/images/theme-images/c8e2332a-5bd2-4944-a0c1-235fa9afe478/image_3840.webp" },
  { name: "MelikeTatar", logoUrl: "https://cdn.myikas.com/images/77ba0774-0110-4ac6-851e-14ae59fda8e1/4e0fec43-8b66-4864-a478-7ae02f31d056/image_1080.webp" },
  { name: "Tuba Butik", logoUrl: "https://cdn.myikas.com/images/7520439d-89d6-419d-b77e-b4ce9598e48d/877a7043-1849-4b11-8cd9-058f01c23c25/1080/12.webp" },
  { name: "Markapia", logoUrl: "https://cdn.myikas.com/images/theme-images/d69eb254-3a5b-4397-8bab-ad7def907ba8/image_3840.webp" },
  { name: "Powder Shop", logoUrl: "https://cdn.myikas.com/images/theme-images/eb7bacaa-fa22-4e66-bd04-feb4c6d9d106/image_3840.webp" },
  { name: "Armonika", logoUrl: "https://cdn.myikas.com/images/theme-images/5665b59f-0865-4b32-8555-6a615f4f9c69/image_3840.webp" },
  { name: "Casedoit", logoUrl: "https://cdn.myikas.com/images/theme-images/3bed1523-81a5-4fde-b035-e6da6d2267c6/image_1080.webp" },
  { name: "Green Black", logoUrl: "https://cdn.myikas.com/images/theme-images/d5e74226-4283-4207-8296-82d2b3817da8/image_3840.webp" },
  { name: "Ecocotton", logoUrl: "https://cdn.myikas.com/images/theme-images/aa9b855e-ae44-4082-bbf8-d3efde5782e2/image_3840.webp" },
  { name: "Rosece", logoUrl: "https://cdn.myikas.com/images/theme-images/19fbf618-b9ca-4228-839a-ebdf7179e215/image_3840.webp" },
  { name: "Limonian", logoUrl: "https://cdn.myikas.com/images/theme-images/fe4f161d-7ee1-48b2-af39-da8cf063a0c8/image_3840.webp" },
  { name: "Fidanistanbul", logoUrl: "https://cdn.myikas.com/images/c7d934c7-2d44-43c3-b023-de7aa93fe435/e8724f8c-8956-4d89-9415-53d63d831e15/image_1080.jpeg" },
  { name: "Petzzshop", logoUrl: "https://cdn.myikas.com/images/theme-images/6849cb5c-355e-4654-88bd-544e0d09cef2/image_3840.webp" },
];

export const upcomingBrands: UpcomingBrand[] = [
  { name: "Biletinial", initials: "BI", bgColor: "bg-purple-100", textColor: "text-purple-600" },
  { name: "Passo", initials: "PA", bgColor: "bg-error-100", textColor: "text-error-600" },
  { name: "Kazara", initials: "KZ", bgColor: "bg-accent-100", textColor: "text-accent-700" },
];
