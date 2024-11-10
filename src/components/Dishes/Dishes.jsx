// import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

import Card from "./Card";

export default function Dishes() {
  const list = [
    {
      title: "Sandwich",
      img: "https://media.istockphoto.com/id/1362101397/photo/moong-dal-sandwich.jpg?s=1024x1024&w=is&k=20&c=xDr_Um9Vc5NNZEHfI8UCvzVqqqPvPyxUQxPa3RH1ixM=",
      price: "$5.50",
      orignal_price: "",
      type: "",
    },
    {
      title: "Burger",
      img: "https://media.istockphoto.com/id/1041137232/photo/100-gluten-free-low-carb-hamburger-and-bun.jpg?s=1024x1024&w=is&k=20&c=-d2RMWdQaJhiptykf5r8DYtsuxlxcsexMcA9vQZZr0o=",
      price: "$3.00",
      orignal_price: "",
      type: "",
    },
    {
      title: "Pizza",
      img: "https://media.istockphoto.com/id/187248625/photo/pepperoni-pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=clncU414Y_vfH-OoUqiwy5AnZRwBpeSehVqJkD9SvKU=",
      price: "$10.00",
      orignal_price: "",
      type: "",
    },
    {
      title: "Cheesecake",
      img: "https://images.unsplash.com/photo-1676300185983-d5f242babe34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "$5.30",
      orignal_price: "",
      type: "",
    },
    {
      title: "Croissant",
      img: "https://images.unsplash.com/photo-1529978215771-45f0bcc12de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JvaXNzYW50fGVufDB8fDB8fHww",
      price: "$15.70",
      orignal_price: "",
      type: "",
    },
    {
      title: "Pasta",
      img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFzdGF8ZW58MHx8MHx8fDA%3D",
      price: "$8.00",
      orignal_price: "",
      type: "",
    },
    {
      title: "Taco",
      img: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$7.50",
      orignal_price: "",
      type: "",
    },
    {
      title: "Chicken Nuggets",
      img: "https://plus.unsplash.com/premium_photo-1711477342232-68e38bac2fac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpY2tlbiUyMG51Z2dldHN8ZW58MHx8MHx8fDA%3D",
      price: "$12.20",
      orignal_price: "",
      type: "",
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-5 ml-5">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
