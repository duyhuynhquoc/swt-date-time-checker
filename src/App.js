import "./App.css";
import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
	const [day, setDay] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");

	const isLeapYear = (year) => {
		if (year % 400 === 0) return true;

		if (year % 100 === 0) return false;

		if (year % 4 === 0) return true;

		return false;
	};

	const daysInMonth = (month, year) => {
		if (
			month === "1" ||
			month === "3" ||
			month === "5" ||
			month === "7" ||
			month === "8" ||
			month === "10" ||
			month === "12"
		)
			return 31;

		if (month === "4" || month === "6" || month === "9" || month === "11")
			return 30;

		if (month === "2") {
			return isLeapYear(year) ? 29 : 28;
		}
	};

	const isValidDate = (day, month, year) => {
		if (month < 1 || month > 12) return false;

		if (day < 1 || day > daysInMonth(month, year)) return false;

		return true;
	};

	const validateDayFormat = (day) => {
		if (isNaN(day) || day === "")
			return "Input data for Day is incorrect format!";
		return day < 1 || day > 31 ? "Input data for Day is out of range" : "";
	};

	const validateMonthFormat = (month) => {
		if (isNaN(month) || month === "")
			return "Input data for Month is incorrect format!";
		return month < 1 || month > 12
			? "Input data for Month is out of range"
			: "";
	};

	const validateYearFormat = (year) => {
		if (isNaN(year) || year === "")
			return "Input data for Year is incorrect format!";
		return year < 1000 || month > 3000
			? "Input data for Year is out of range"
			: "";
	};

	const getErrorMessage = () => {
		console.log(isLeapYear(year));
		console.log(daysInMonth(month, year));

		let result = "";
		result = validateDayFormat(day);
		if (result !== "") return result;

		result = validateMonthFormat(month);
		if (result !== "") return result;

		result = validateYearFormat(year);
		if (result !== "") return result;

		if (result === "")
			return isValidDate(day, month, year)
				? `${day}/${month}/${year} is correct date time`
				: `${day}/${month}/${year} is NOT correct date time`;
	};

	const onSubmit = () => {
		alert(getErrorMessage());
	};

	const onClear = () => {
		setDay("");
		setMonth("");
		setYear("");
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				width: "200px",
				position: "absolute",
				left: "50%",
				transform: "translateX(-50%)",
			}}
		>
			<p>Date</p>
			<TextField
				id="date-input"
				label="Day"
				variant="outlined"
				onChange={(e) => {
					setDay(e.target.value);
				}}
				value={day}
			/>

			<p>Month</p>
			<TextField
				id="month-input"
				label="Month"
				variant="outlined"
				onChange={(e) => {
					setMonth(e.target.value);
				}}
				value={month}
			/>

			<p>Year</p>
			<TextField
				id="year-input"
				label="Year"
				variant="outlined"
				onChange={(e) => {
					setYear(e.target.value);
				}}
				value={year}
			/>

			<div>
				<Button
					variant="contained"
					onClick={onClear}
					style={{ marginRight: "10px", marginTop: "20px" }}
				>
					Clear
				</Button>

				<Button
					variant="contained"
					onClick={onSubmit}
					style={{ marginRight: "10px", marginTop: "20px" }}
				>
					Check
				</Button>
			</div>
		</div>
	);
}

export default App;
