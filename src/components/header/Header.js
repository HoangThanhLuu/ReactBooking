import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import { useState } from 'react'
import {
    faBed,
    faCar,
    faCalendarDays,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import './Header.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handledBookingRoom = (name, caculate) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: caculate === "t" ? options[name] - 1 : options[name] + 1
            }

        })
    }
    return (
        <div className='header'>
            <div className='headerContainer'>




                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>




                {type !== "lists" && <>(
                    <h1 className="headerTitle">
                        Giảm giá trọn đời?
                    </h1>
                    <p className="headerDesc">
                        Nhận phần thưởng cho chuyến đi của bạn - tiết kiệm ngay lập tức từ 10% trở lên với tài khoản Lamabooking miễn phí
                    </p>

                    <button className='btnSingR'>Sing in/Register</button>


                    <div className='headerSearch'>
                        <div className='headerSearchItems'>
                            <FontAwesomeIcon className='headerSearchIcon' icon={faBed} />
                            <input className='headerSearchInput' placeholder='Bạn muốn ở đâu' />
                        </div>
                        <div className='headerSearchItems'>
                            <FontAwesomeIcon className='headerSearchIcon' icon={faCalendarDays} />
                            <span onClick={() => setOpenDate(!openDate)}> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                                date[0].endDate,
                                "MM/dd/yyyy"
                            )}`}</span>
                            {openDate && <DateRange
                                className='headerSearchDateRange'
                                editableDateInputs={false}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                            />}

                        </div>
                        <div className='headerSearchItems'>
                            <FontAwesomeIcon onClick={() => setOpenOptions(!openOptions)} className='headerSearchIcon' icon={faPerson} />
                            <span >{options.adult} người lớn {options.children} trẻ em {options.room} phòng</span>
                            {
                                openOptions && <div className='options'>
                                    <div className='optionsItems'>
                                        <span className='optionText'>Adult</span>
                                        <div className='optionCouter'>
                                            <button disabled={options.adult === 1} onClick={() => handledBookingRoom("adult", "t")} className='optionCouterBtn'>-</button>
                                            <span className='optionNumber'>{options.adult}</span>
                                            <button onClick={() => handledBookingRoom("adult", "c")} className='optionCouterBtn'>+</button>
                                        </div>
                                    </div>
                                    <div className='optionsItems'>
                                        <span className='optionText'>Children</span>
                                        <div className='optionCouter'>
                                            <button disabled={options.children === 1} onClick={() => handledBookingRoom("children", "t")} className='optionCouterBtn'>-</button>
                                            <span className='optionNumber'>{options.children}</span>
                                            <button onClick={() => handledBookingRoom("children", "c")} className='optionCouterBtn'>+</button>
                                        </div>
                                    </div>
                                    <div className='optionsItems'>
                                        <span className='optionText'>Room</span>
                                        <div className='optionCouter'>
                                            <button disabled={options.room === 1} onClick={() => handledBookingRoom("room", "t")} className='optionCouterBtn'>-</button>
                                            <span className='optionNumber'>{options.room}</span>
                                            <button onClick={() => handledBookingRoom("room", "c")} className='optionCouterBtn'>+</button>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="headerSearchItem">
                                <button className="headerBtn" >
                                    Search
                                </button>
                            </div>

                        </div>

                    </div>




                    )</>}








            </div>


        </div>
    )
}

export default Header