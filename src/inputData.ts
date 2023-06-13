// import { faker } from "@faker-js/faker";

interface cek {
  name: string;
  material: string;
  description: string;
  imageUrl: string;
  price: string;
  supplierId: string;
}

export const arrInput: Array<cek> = [];

const data: Array<string> = [
  "3ee3e716-f61e-4348-8afc-b068832a91cf",
  "3b3499ab-f7ee-4801-bef5-01a767c25f4a",
  "c8ad5b55-cf56-44bc-be12-168afc2ab511",
  "d241dca5-081c-4f9b-a183-03b08e174797",
  "cc6be751-43b2-4323-acd0-5f8cf4642105",
  "6abb4f92-e5a7-4828-a434-1742e8602371",
  "db52f3a7-ee07-4807-b635-03736997151c",
  "38923aff-e92e-4703-b983-d294f0c23c46",
  "ff391726-9c65-466e-88c1-6090186eba0f",
  "d1aa0d43-58e3-499e-bc83-3080e307ebb1",
  "13ec7129-99e3-4db0-a954-858dc243ef89",
  "29cb6fd4-14b7-4d8a-ba07-900f32f79f95",
  "c08e3fe0-9e5c-4950-a904-bb9fa16bff05",
  "f63f89db-bf34-47b6-ab2d-48dd95caf64b",
  "fb486912-332d-41b9-bf6b-7e8f87f88139",
  "71df70e9-2718-42d3-8d51-f5598a3282d1",
  "271dc1ea-9373-4164-b23c-c21c77b6a362",
  "83a51e54-bb46-4d4f-915d-5d93d8ae8294",
  "a624ca3a-c70b-4db2-80da-1102e1d4103e",
  "703a5062-08fc-4098-898f-784f838b237a",
  "35dc2341-3b39-4a40-8b2b-1a8220c709d7",
  "00212562-cc23-4571-9872-7453e9ec5d98",
  "2a1f4aaf-b0ca-4b00-9303-3d627d08b027",
  "cd7a0321-e7c2-4d5f-9ba8-e0be4fdba4a5",
  "e647f27a-3bf7-44c9-9dcb-75f952d26f05",
  "e730081f-4c87-4013-97b5-5403f988d6a7",
  "bdafad96-3188-417f-b738-2a3c3d5b6039",
  "d3eb2d33-a5c9-4460-b872-d46ea7c1d64c",
  "1e8d49e6-ea35-4114-9831-4e424a5cbf66",
  "2685401b-9b76-46ea-b6ba-c481bf4ac912",
  "18e60d2f-2a0e-4384-8d46-e3a57a94b823",
  "d130102d-2e60-4811-8b1d-ade8db2af94b",
  "faff3c10-703c-4cd4-940e-cf706b4d64ff",
  "e36dee7f-0780-4237-b4da-596b19c64b79",
  "66a41d43-e668-4223-98bc-be7e7c45e081",
  "f37edc85-378a-496c-b58e-2fc2be95b570",
  "4845e6e9-af80-48b9-adfa-7167b7caf3b8",
  "74535a78-b715-41ab-bde2-4c2477f575d4",
  "9db81d30-192e-4855-95e7-182ed0d93e76",
  "21fa554c-4bc2-4320-8466-1f294701cb1c",
  "e2ce5f0e-5ef6-4f57-b0b5-7445621e227a",
  "cdf6906a-7797-4cf4-a0ab-8723f5b2f1cc",
  "44b2891e-8dac-4b84-9b79-d554b256bab4",
  "ea2afaaf-c1ba-487c-a111-6f8971b7031f",
  "c3593ed7-49e7-4536-aa82-84990fc1b017",
  "a3d67b10-2e63-4ccc-bfb0-051f215ab151",
  "a1c434a0-c8a4-40dd-8581-4053d8f070f7",
  "c549d5f1-519b-442a-8b72-d502f84f9624",
  "83b982b7-0abb-418c-b893-771c17c49360",
  "e5f6ddb4-402e-4422-8601-9bd9d64c6ec4",
  "aba64872-91e1-4ec7-93c4-6bac9b853351",
  "6dbc0119-3481-407c-89c2-ecb2183d9ea4",
  "5035f54c-5321-449b-88df-3d2b7d601579",
  "96496703-f370-46a2-b4b0-2be1fbcfebbb",
  "1e973398-7bce-4977-b69d-26a7da8d8565",
  "a28e155f-b74d-41d0-9b42-f31f31456c6d",
  "992afc86-1d5c-4b74-8217-5b2468a4488c",
  "bab5cc66-4d1e-41dd-a4ed-314d3ead34f5",
  "388a43cb-b719-4678-b86d-8548929cf836",
  "bf21ba3b-8ac3-4084-a526-387e5a6969bb",
  "dc9f8dd5-e080-4925-a85c-c8790d8d03de",
  "aba84551-710d-485f-b932-f20208ebf438",
  "ef3e4da5-6b7e-4fca-a62c-9f1a72eaa824",
  "47e5b0e3-13da-4cfb-8a4a-25b1db0401ba",
  "e60c9972-1a0f-40db-b40a-d5c04a9d5107",
  "3b111404-25c0-4108-b80e-c8bad7086272",
  "72171a07-0f42-470b-b926-b30da1c56dfe",
  "566680dd-f075-453a-8613-ec417ca0408d",
  "572af426-4610-40de-9ade-6c924ebb598d",
  "30536f64-579a-4b43-b445-d527842de7c6",
  "7150fce3-0681-47b2-bd99-73547d7ad786",
  "5470fd0e-ee97-464d-a7be-3aa8ddb346aa",
  "e60e3a2a-1649-46d2-9c58-7ae8a5a56f35",
  "fe1d1810-155e-419b-a6a5-e5301e27480d",
  "b4b7ad7d-c7ce-4222-9f9c-f8889783c4eb",
  "2e688c3d-a50c-47d0-a6b4-3d96900b5d13",
  "e87bd9df-06b6-4ea5-b5c7-1d639a71b670",
  "98907cec-f1f2-4222-ac15-f641311276d9",
  "d95d1bf7-06cd-4d28-bcc9-6e90cab257fb",
  "2184d69d-94e0-442f-9c3f-bd5bea493177",
  "8b42e2ac-7e36-4c2c-a3ac-9138bb3aa1d4",
  "3590eace-252b-4e64-acd3-da79d83e811b",
  "c62b5d7a-4d73-424b-87dd-a8dc6191dbdb",
  "96764b60-f265-4de6-ad1f-ba790453cffd",
  "ad1233ed-1c28-4269-b705-5b63b22307b6",
  "b5effaea-d74b-432b-8657-6721019f9b08",
  "3c74753a-d3b1-4108-b646-ba4f6798e860",
  "fb21b280-ccb6-4093-9cd9-01e3b7a04b11",
  "cd7c42e0-5fd2-4193-82fc-c21def9743f4",
  "2981c01d-faa7-49aa-9079-5e771efce20e",
  "1ac32bbd-42a3-42c8-8e96-4e0eb05537bd",
  "6192c54a-089d-4ac9-b79c-959b1653dd06",
  "c54ae57b-e3d9-4225-8e0f-0e097bb5af9d",
  "894eb1f1-a459-4c09-bb8f-47fdc0a7486e",
  "60676d56-4148-4711-b35b-70995ba629dd",
  "91ec9fbd-f09f-4a3f-be79-b09233a55b89",
  "37837583-6a4a-4b5b-852b-0ec36adf286b",
  "a3550855-1623-4ff6-83a4-a630517af5a9",
  "e1ab58b9-4de0-4b0c-8ae4-61aeed7ddf7f",
  "51a57b92-9533-4d41-9749-b8f5e2b00cfe",
];

// for (let i = 0; i < 100000; i++) {
//   arrInput.push({
//     name: faker.commerce.productName().toLowerCase(),
//     material: faker.commerce.productMaterial().toLowerCase(),
//     description: faker.commerce.productDescription().toLowerCase(),
//     imageUrl: faker.image.url(),
//     price: faker.commerce.price(),
//     supplierId: faker.helpers.arrayElement(data),
//   });
// }
