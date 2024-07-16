import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";

import garudaLogo from '/src/assets/Airline/garuda.png';
import lionAirLogo from '/src/assets/Airline/lionair.png';
import batikAirLogo from '/src/assets/Airline/batikair.png';
import citilinkLogo from '/src/assets/Airline/citilink.png';
import sriwijayaLogo from '/src/assets/Airline/sriwijaya.png';
import qr from '/src/assets/qr.jpeg';

export default function NormfalForm() {
  const [formData, setFormData] = useState({
    kodepemesanan: "",
    namabelakang: "",
    message: "",
    airline: "",
    selectedDate: null,
    seat: "",
    originAirport: "",
    destinationAirport: ""
  });

  const airlines = [
    { name: "Garuda Indonesia", logo: garudaLogo, flightCode: "GA-610" },
    { name: "Lion Air", logo: lionAirLogo, flightCode: "JT-320" },
    { name: "Batik Air", logo: batikAirLogo, flightCode: "ID-6542" },
    { name: "Citilink", logo: citilinkLogo, flightCode: "QG-112" },
    { name: "Sriwijaya Air", logo: sriwijayaLogo, flightCode: "SJ-182" }
  ];
  
  const airports = [
    {
      city: "Biak Numfor",
      airport: "Frans Kaisiepo International Airport"
    },
    {
      city: "Jayapura",
      airport: "Sentani International Airport"
    },
    {
      city: "Makassar",
      airport: "Sultan Hasanuddin International Airport"
    },
    {
      city: "Yogyakarta",
      airport: "Yogyakarta International Airport"
    },
    {
      city: "Jakarta",
      airport: "Soekarno-Hatta International Airport"
    },
    {
      city: "Bali",
      airport: "Ngurah Rai International Airport"
    },
    {
      city: "Medan",
      airport: "Kualanamu International Airport"
    }
  ];

  const seats = [
    ["", "1A", "1D", "1F"],
    ["","2A",  "2D", "2F"],
    ["3A", "3C", "3D", "3F"],
    ["4A", "4C", "4D", "4F"],
    ["5A", "5C", "5D", "5F"],
    ["6A", "6C", "6D", "6F"],
    ["7A", "7C", "7D", "7F"],
    ["8A", "8C", "8D", "8F"],
    ["9A", "9C", "9D", "9F"],
    ["10A", "10C", "10D", "10F"],
    ["11A", "11C", "11D", "11F"],
    ["12A", "12C", "12D", "12F"],
    ["13A", "13C", "13D", "13F"],
    ["14A", "14C", "14D", "14F"],
    ["15A", "15C", "15D", "15F"],
    ["16A", "16C", "16D", "16F"],
    ["17A", "17C", "17D", "17F"],
    ["18A", "18C", "18D", "18F"]
  ];

  const SeatSection = ({ title, seats }) => (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div className="grid grid-cols-5 gap-2">
        {seats.map((row) => (
          <React.Fragment key={row[0]}>
            <button
              type="button"
              onClick={() => handleSeatClick(row[0])}
              className={`p-2 border rounded ${
                formData.seat === row[0] ? "bg-blue-500 text-white text-[10px] sm:text-[16px]" : "bg-gray-200 text-black text-[10px] sm:text-[16px]"
              }`}
            >
              {row[0]}
            </button>
            <button
              type="button"
              onClick={() => handleSeatClick(row[1])}
              className={`p-2 border rounded ${
                formData.seat === row[1] ? "bg-blue-500 text-white text-[10px] sm:text-[16px]" : "bg-gray-200 text-black text-[10px] sm:text-[16px]"
              }`}
            >
              {row[1]}
            </button>
            <div className="w-4"></div> {/* Empty div for extra space */}
            <button
              type="button"
              onClick={() => handleSeatClick(row[2])}
              className={`p-2 border rounded ${
                formData.seat === row[2] ? "bg-blue-500 text-white text-[10px] sm:text-[16px]" : "bg-gray-200 text-black text-[10px] sm:text-[16px]"
              }`}
            >
              {row[2]}
            </button>
            <button
              type="button"
              onClick={() => handleSeatClick(row[3])}
              className={`p-2 border rounded ${
                formData.seat === row[3] ? "bg-blue-500 text-white text-[10px] sm:text-[16px]" : "bg-gray-200 text-black text-[10px] sm:text-[16px]"
              }`}
            >
              {row[3]}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const handleSeatClick = (seat) => {
    setFormData((prevData) => ({
      ...prevData,
      seat
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAirlineChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      airline: selectedOption.value
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDate: date
    }));
  };

  const handleAirportChange = (selectedOption, action) => {
    setFormData((prevData) => ({
      ...prevData,
      [action.name]: selectedOption.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
    const { kodepemesanan, namabelakang, airline, selectedDate, seat, originAirport, destinationAirport } = formData;
    if (!kodepemesanan || !namabelakang || !airline || !selectedDate || !seat || !originAirport || !destinationAirport) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "All fields are required. Please fill in all fields before submitting.",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK"
      });
      return;
    }
    const selectedAirline = airlines.find(a => a.name === airline);
  
    Swal.fire({
      icon: "success",
      title: "Checkin Successfully!",
      html: `
        <div style="text-align: center; display: flex;justify-content: center;">
        <img src="${qr}" alt="QR Code" style="width: 150px; height: 150px; margin-bottom: 20px;">
      </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="text-align: left; padding: 4px;"><strong>Kode Pemesanan</strong></td>
            <td style="text-align: left; padding: 4px;">: ${kodepemesanan}</td>
          </tr>
          <tr>
            <td style="text-align: left; padding: 4px;"><strong>Nama Belakang</strong></td>
            <td style="text-align: left; padding: 4px;">: ${namabelakang}</td>
          </tr>
          <tr>
          <td style="text-align: left; padding: 4px;"><strong>Airline:</strong></td>
          <td style="text-align: left; padding: 4px;">: ${airline} (${selectedAirline ? selectedAirline.flightCode : ''})</td>
        </tr>
          <tr>
            <td style="text-align: left; padding: 4px;"><strong>Tanggal</strong></td>
            <td style="text-align: left; padding: 4px;">: ${selectedDate ? selectedDate.toLocaleDateString() : ''}</td>
          </tr>
          <tr>
            <td style="text-align: left; padding: 4px;"><strong>Seat</strong></td>
            <td style="text-align: left; padding: 4px;">: ${seat}</td>
          </tr>
          <tr>
            <td style="text-align: left; padding: 4px;"><strong>Bandara Asal</strong></td>
            <td style="text-align: left; padding: 4px;">: ${originAirport}</td>
          </tr>
          <tr>
            <td style="text-align: left; padding: 4px;"><strong>Bandara Tujuan</strong></td>
            <td style="text-align: left; padding: 4px;">: ${destinationAirport}</td>
          </tr>
         
        </table>
      `,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK"
    }).then((result) => {
      if (result.isConfirmed || result.dismiss === Swal.DismissReason.backdrop) {
        setFormData({
          kodepemesanan: "",
          namabelakang: "",
          message: "",
          airline: "",
          selectedDate: null,
          seat: "",
          originAirport: "",
          destinationAirport: ""
        });
  
       
      }
    });
  };
  
  
  
  const airlineOptions = airlines.map((airline) => ({
    value: airline.name,
    label: (
      <div className="flex items-center">
        <img src={airline.logo} alt={airline.name} className="h-6 w-6 inline-block mr-2" />
        {airline.name}
      </div>
    )
  }));

  const airportOptions = airports.map((airport) => ({
    value: airport.airport,
    label: `${airport.city} - ${airport.airport}`
  }));

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Web Checkin</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="airline" className="block text-sm font-medium text-gray-700">Airline</label>
          <Select
            id="airline"
            name="airline"
            value={airlineOptions.find(option => option.value === formData.airline)}
            onChange={handleAirlineChange}
            options={airlineOptions}
            formatOptionLabel={option => option.label}
            className="mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="kodepemesanan" className="block text-sm font-medium text-gray-700">Kode Pemesanan</label>
          <input
            type="text"
            id="kodepemesanan"
            name="kodepemesanan"
            value={formData.kodepemesanan}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="ex.OCBAJS"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="namabelakang" className="block text-sm font-medium text-gray-700">Nama Belakang</label>
          <input
            type="namabelakang"
            id="namabelakang"
            name="namabelakang"
            value={formData.namabelakang}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Masukan Nama Belakang"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="originAirport" className="block text-sm font-medium text-gray-700">Bandara Asal</label>
          <Select
            id="originAirport"
            name="originAirport"
            value={airportOptions.find(option => option.value === formData.originAirport)}
            onChange={(option, action) => handleAirportChange(option, action)}
            options={airportOptions}
            className="mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="destinationAirport" className="block text-sm font-medium text-gray-700">Bandara Tujuan</label>
          <Select
            id="destinationAirport"
            name="destinationAirport"
            value={airportOptions.find(option => option.value === formData.destinationAirport)}
            onChange={(option, action) => handleAirportChange(option, action)}
            options={airportOptions}
            className="mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="selectedDate" className="block text-sm font-medium text-gray-700">Select Date</label>
          <DatePicker
            id="selectedDate"
            name="selectedDate"
            selected={formData.selectedDate}
            onChange={handleDateChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            required
          />
        </div>
       
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Seat</label>
          <SeatSection title="United First" seats={seats.slice(0, 2)} grid={'3'} />
          <SeatSection title="Economy Premium" seats={seats.slice(2, 6)} grid={'4'} />
          <SeatSection title="Economy" seats={seats.slice(6)} grid={'4'}/>
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Check-in
        </button>
      </form>
    </div>
  );
}
