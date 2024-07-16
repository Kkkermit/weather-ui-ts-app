export const getWeatherIcon = (description: string) => {
	if (description === "overcast clouds") {
		return "https://imgs.search.brave.com/ZZcoKuSwlSqQ6h7aFKbi-zBnvVCAL-qLV3W-0zD9eaA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/MzM1NDgzL3Bob3Rv/L2ZsdWZmeS13aGl0/ZS1jbG91ZHMtZnJv/bS1hYm92ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ME9o/LTJYc2ZrWWdJaVBu/eUppLVdtNlFOYjJJ/UXJrNGdqZ050bHRi/QTNWND0";
	} else if (description === "light rain") {
		return "https://imgs.search.brave.com/qsdlcXRS-9zeyMdWuzfinkAD8oO19m816kqaenc7pgc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdhLzVj/L2UyLzdhNWNlMjQ5/NmNiM2E5ZDQxODNm/OGQ3MDZjNDQ3Y2Fk/LmpwZw";
	} else if (description === "cloudy") {
		return "https://imgs.search.brave.com/J8qaqCfRqVuS-tD3NR80rMKbi1VYrMeDz42O-qFHoGk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/Mzg4MzI5MS9waG90/by9zdG9ybXktY2xv/dWR5LXNraWVzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1C/NEp0cXI5TmZ3X010/bktobzRBbnJXZ3Ix/MmNSSkNfUTR5U3Jw/bVRNaW5vPQ";
	} else if (description === "clear sky") {
		return "https://imgs.search.brave.com/ty86Mp-VLTj-LsFJ76wBHkHnD36ctJHJa6mGcktS564/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/MzM5NDY3Ni9waG90/by9sYW5kc2NhcGUt/b2YtdGhlLWNsZWFy/LXNreS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9ZTNFX3pL/Rm0xNW12UFE4OWUw/LTlDaUx4UW1yTzFD/WVlBc3poXzZZLW9P/UT0";
	} else if (description === "broken clouds") {
		return "https://imgs.search.brave.com/Z8Rf7v-YhFi7ba2QhRNrduEjGfZ-YkbEDIaLjVWqKdM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/d29yZHByZXNzLWlu/Zm8uZnV0dXJlbGVh/cm4uY29tL2luZm8v/d3AtY29udGVudC91/cGxvYWRzL2M3M2E2/YWI3LTU3YmMtNDZl/NS1hMTU1LWY4NWU4/Y2NhZTc0MC03Njh4/NTEyLmpwZw";
	} else if (description === "few clouds") {
		return "https://imgs.search.brave.com/uQ-tvtedNK-LTnipt2dnGFpnsu9BOsM-1VijnaNZ968/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/MDgyMjM0OC9waG90/by9kZWVwLWJsdWUt/c2t5LXdpdGgtZmV3/LWNsb3Vkcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VXhp/SVJsTW9sMThteWZ1/NG9haERiT3RUb2J3/ay05ajdkakxHT2tL/NlhUaz0";
	} else if (description === "rainy") {
		return "https://imgs.search.brave.com/j1pWJYQZX13JBazro1doT-5sm36A-I6llZGIWyiVSIM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg0/NjE1MDQyL3Bob3Rv/L3JhaW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTh6RlZt/RF96VndfUWNYWVR3/REt0RFFmZ1QwSWE5/WDk0SDVja1NBWHpo/RFk9";
	} else if (description === "snowy") {
		return "https://imgs.search.brave.com/NsFfYj76AUynujbSuSdzJNLcyt2OCbZ1YyoY3-9dOy0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc4/MjE2NjQxL3Bob3Rv/L3Nub3ctZmFsbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OVJibUxtVmtpWHM1/bnZXU1pwQVRvSkdo/b1ZUT1JqRGlyM1B6/TEgwMU52MD0";
	} else if (description === "heavy rain") {
		return "https://imgs.search.brave.com/4Xjx5cAcOIatvoPMKyK0I9gRfTEQsXX4diY1tV8MkCM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTIx/ODM4Njk0L3Bob3Rv/L3JvdWdoLXNlYS1h/bmQtcmFpbi1kcm9w/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Vm11Zm4zUHls/R0d4Y1QyS2ZKZldU/MnpncGJkZTJMemRm/bmpHVGxsdlkzdz0";
	} else if (description === "sunny") {
		return "https://imgs.search.brave.com/Ar0EI0CQUqsE971286UMPHMDHjJb7CLXgcIJY4hb02Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/NTM3ODMwNi9waG90/by9zdW5ueS1kYXku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PV9wQWxESm9SVktK/WXQ2OHJyY1NqNVdV/Z2p2OGp1LVFnWFpZ/dUdkcE50eGc9";
	} else if (description === "scattered clouds") {
		return "https://imgs.search.brave.com/Z8Rf7v-YhFi7ba2QhRNrduEjGfZ-YkbEDIaLjVWqKdM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/d29yZHByZXNzLWlu/Zm8uZnV0dXJlbGVh/cm4uY29tL2luZm8v/d3AtY29udGVudC91/cGxvYWRzL2M3M2E2/YWI3LTU3YmMtNDZl/NS1hMTU1LWY4NWU4/Y2NhZTc0MC03Njh4/NTEyLmpwZw";
	} else if (description === "light intensity shower rain") {
		return "https://imgs.search.brave.com/nVbhbwqSW0XCHc9aECj2rRCYmqmD6UYCmSlQePXrH3U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zN2Qy/LnNjZW5lNy5jb20v/aXMvaW1hZ2UvVFdD/TmV3cy9jYV9sYV9y/YWluX2dldHR5aW1h/Z2VzLTk0OTEzMDk4/anBn.jpeg";
	} else if (description === "drizzle rain") {
		return "https://imgs.search.brave.com/2QZhSI_hD4lS6COf7c4qC_Ac7QrqoqETL7IW_q0uTvs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/MTM1Mzg3NS9waG90/by9yYWluLWRyb3Bz/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXQtWjFZM2hVODRF/ZHQwN1F3TFZtSkRW/N2Z0RDJ3R3BMcHFh/LWd6RkVLYUk9";
	}
};
