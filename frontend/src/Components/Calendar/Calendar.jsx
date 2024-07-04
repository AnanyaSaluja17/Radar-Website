// Calendar.js
import  { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./Calendar.css"

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleButtonClick = () => {
    setShowDatePicker(true)
  }

  const handleDateChange = (date) => {
    setStartDate(date)
    setShowDatePicker(false) // Hide date picker after selecting a date
  }

  return (
    <div className="Calendar">
      <button className="button-calendar" onClick={handleButtonClick}>
        Calendar
      </button>
      {showDatePicker && (
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          inline
          maxDate={new Date()}
        />
      )}
    </div>
  )
}

export default Calendar
