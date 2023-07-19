import React, { useEffect, useState } from "react";

const useDate = () => {
	const [year, setYear] = useState<number>(0);
	const [month, setMonth] = useState<number>(0);
	const [day, setDay] = useState<number>(0);
	useEffect(() => {
		const date = new Date();
		setYear(date.getFullYear());
		setMonth(date.getMonth() + 1);
		setDay(date.getDate());
	}, []);

	return {
		year,
		month,
		day,
	};
};

export default useDate;
