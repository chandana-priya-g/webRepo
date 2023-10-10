import React from "react";
import { useForm} from "react-hook-form";
import {useState} from 'react';
import styled from "styled-components";
import "./BookingsForm.css";
import moment, { max, min } from 'moment';
import { useNavigate } from "react-router-dom";
import bgimage from './rbg.jpg';

export default function BookingsForm(){

    const {register, errors, setSubmit} = useForm();
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    //const submit = "";

    const styling = {
        display : "grid"
    };

    function handleSubmit() {
        navigate('/Confirmation')
    }

    return(
        <div className="form-div">
            <styled>
                <h2> Reserve a Table</h2>
                <form style = {styling} onSubmit={handleSubmit}>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" {...register('test', { required: 'Required' })} min={moment().format("YYYY-MM-DD")}  value={date} onChange={(e) => setDate(e.target.value)}/>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " {...register('test', { required: 'Required' })} value={time} onChange={(e) => setTime(e.target.value)}>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" {...register('test', { required: 'Required' })} value={guests} onChange={(e) => setGuests(e.target.value)}/>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" {...register('test', { required: 'Required' })} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <label htmlFor="res-fname">First Name</label>
                    <input type="text" id="res-fname" placeholder="First Name" required minLength={1} maxLength={50} value={fName} onChange={(e) => setFName(e.target.value)}/>
                    <label htmlFor="res-lname">Last Name</label>
                    <input type="text" id="res-lname" placeholder="Last Name" required minLength={1} maxLength={50} value={lName} onChange={(e) => setLName(e.target.value)}/>
                    <label htmlFor="email">Email</label> <br></br>
                    <input type="email" id="email" placeholder="Email" required minLength={4} maxLength={50} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="submit" value="Make Your reservation" onSubmit={handleSubmit}/>
                </form>
            </styled>
        </div>
    );
}