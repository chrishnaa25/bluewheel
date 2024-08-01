import React, { useState } from "react";
import img from "../images/logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

type AuthUser = {
    phone?: string
    altphone?: string
    loc?: string
    address?: string
    year?: string
}


export const Login = () => {
  const [nav, setNav] = useState<string | null>("Details");
  const [details, setDetails] = useState<string | null>("Service Center");
  const [input, setInput] = useState<AuthUser | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const data = e.currentTarget.getAttribute("data-name");
    setNav(data);
  };

  const handleDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
    const data = e.currentTarget.getAttribute("data-name");
    setDetails(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    
    setInput((prev) => ({...prev, [e.target.name] : e.target.value }));

    
}
  

  return (
    <div>
      <div className=" flex bg-blue-800 h-16 pl-10 pr-20 justify-between ">
        <img src={img} alt="img" className="h-16 w-36" />
        <p className="text-2xl text-white content-center">John Doe</p>
      </div>
      <div className=" flex h-16 pl-10 pr-10 justify-between border-white border-b-2">
        <p className=" content-center text-2xl">Service Center</p>
        <p className=" content-center text-xl">Center ID: 12421</p>
      </div>
      <div className=" flex bg-slate-200">
        <div className="basis-1/6 flex flex-col bg-white mr-9">
          <Button
            type="button"
            name="Details"
            data-name="Details"
            onClick={handleClick}
            className={`${
              nav === "Details"
                ? "bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Applications"
            data-name="Applications"
            onClick={handleClick}
            className={`${
              nav === "Applications"
                ? "bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Bookings"
            data-name="Bookings"
            onClick={handleClick}
            className={`${
              nav === "Bookings"
                ? "bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Service Advice"
            data-name="Service Advice"
            onClick={handleClick}
            className={`${
              nav === "Service Advice"
                ? "bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Images"
            data-name="Images"
            onClick={handleClick}
            className={`${
              nav === "Images"
                ? "bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Instant Services"
            data-name="Instant Services"
            onClick={handleClick}
            className={`${
              nav === "Instant Services"
                ? "bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Scheduled Services"
            data-name="Scheduled Services"
            onClick={handleClick}
            className={`${
              nav === "Scheduled Services"
                ? "bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Booking Preferences"
            data-name="Booking Preferences"
            onClick={handleClick}
            className={`${
              nav === "Booking Preferences"
                ? "bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Highlights"
            data-name="Highlights"
            onClick={handleClick}
            className={`${
              nav === "Highlights"
                ? "bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Language"
            data-name="Language"
            onClick={handleClick}
            className={`${
              nav === "Language"
                ? "bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 m-3 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
        </div>
        {nav === "Details" && (
          <div className="basis-5/6 mt-6 mr-10 mb-1 ">
            <div className="flex flex-col bg-white rounded-lg ">
              <p className="font-bold text-3xl pl-10 pt-5 pb-5">
                A1 Car Service Center
              </p>

              <div className="flex justify-between pl-20 pr-36 text-xl items-center">
                <Button
                  type="button"
                  name="Service Center"
                  data-name="Service Center"
                  onClick={handleDetails}
                  className={`${
                    details === "Service Center"
                      ? "w-52 h-10 bg-slate-200"
                      : "w-52 h-10 hover:bg-slate-200"
                  }`}
                />
                <Button
                  type="button"
                  name="Owner"
                  data-name="Owner"
                  onClick={handleDetails}
                  className={`${
                    details === "Owner"
                      ? "w-52 h-10 bg-slate-200"
                      : "w-52 h-10 hover:bg-slate-200"
                  }`}
                />
                <Button
                  type="button"
                  name="Bank Account"
                  data-name="Bank Account"
                  onClick={handleDetails}
                  className={`${
                    details === "Bank Account"
                      ? "w-52 h-10 bg-slate-200"
                      : "w-52 h-10 hover:bg-slate-200"
                  }`}
                />
              </div>
            </div>
            {details === "Service Center" && (
              <div className="flex flex-col pl-20 pt-3 pb-8 content-stretch bg-white mt-6 rounded-lg">
                <p>Phone Number</p>
                <Input
                  type="text"
                  onChange={handleChange}
                  value={input?.phone}
                  name="Phone Number"
                  className="border-2 border-gray-500 w-[87%] mb-4 rounded-lg h-8"
                  placeholder="Enter Values"
                />
                <p>Alternate Phone Number</p>
                <Input
                  type="text"
                  onChange={handleChange}
                  value={input?.altphone}
                  name="Alternate Phone Number"
                  className="border-2 border-gray-500 w-[87%] mb-4 rounded-lg h-8"
                  placeholder="Enter Values"
                />
                <p>Location</p>
                <Input
                  type="text"
                  onChange={handleChange}
                  value={input?.loc}
                  name="Location"
                  className="border-2 border-gray-500 w-[87%] mb-4 rounded-lg h-8"
                  placeholder="Enter Values"
                />
                <p>Address</p>
                <Input
                  type="text"
                  onChange={handleChange}
                  value={input?.address}
                  name="Address"
                  className="border-2 border-gray-500 w-[87%] mb-4 rounded-lg h-8"
                  placeholder="Enter Values"
                />
                <p>Year of Establishment</p>
                <Input
                  type="text"
                  onChange={handleChange}
                  value={input?.year}
                  name="Year of Establishment"
                  className="border-2 border-gray-500 w-[87%] mb-4 rounded-lg h-8"
                  placeholder="Enter Values"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

