const dataStore = {
    bookings: [
        {
            id: '1',
            hostEmail: 'host1@gmail.com',
            guestName: 'Guest 1',
            checkInDate: '2023-10-01',
            checkOutDate: '2023-10-05',
            status: 'completed',
            price: 200
        },
        {
            id: '2',
            hostEmail: 'host2@gmail.com',
            guestName: 'Guest 2',
            checkInDate: '2023-10-10',
            checkOutDate: '2023-10-12',
            status: 'completed',
            price: 150
        },
        {
            id: '3',
            hostEmail: 'host1@gmail.com',
            guestName: 'Guest 3',
            checkInDate: '2023-10-01',
            checkOutDate: '2023-10-03',
            status: 'completed',
            price: 300
        },
        {
            id: '4',
            hostEmail: 'host3@gmail.com',
            guestName: 'Guest 4',
            checkInDate: '2023-09-01',
            checkOutDate: '2023-09-05',
            status: 'completed',
            price: 200
        },
        {
            id: '5',
            hostEmail: 'host4@gmail.com',
            guestName: 'Guest 5',
            checkInDate: '2023-08-01',
            checkOutDate: '2023-08-05',
            status: 'completed',
            price: 200
        },
        {
            id: '6',
            hostEmail: 'host5@gmail.com',
            guestName: 'Guest 6',
            checkInDate: '2023-10-01',
            checkOutDate: '2023-10-05',
            status: 'completed',
            price: 200
        },
        {
            id: '7',
            hostEmail: 'host1@gmail.com',
            guestName: 'Guest 7',
            checkInDate: '2023-09-15',
            checkOutDate: '2023-09-20',
            status: 'completed',
            price: 250
        },
        {
            id: '8',
            hostEmail: 'host2@gmail.com',
            guestName: 'Guest 8',
            checkInDate: '2023-08-10',
            checkOutDate: '2023-08-15',
            status: 'completed',
            price: 180
        },
        {
            id: '9',
            hostEmail: 'host3@gmail.com',
            guestName: 'Guest 9',
            checkInDate: '2023-07-01',
            checkOutDate: '2023-07-05',
            status: 'completed',
            price: 220
        },
        {
            id: '10',
            hostEmail: 'host4@gmail.com',
            guestName: 'Guest 10',
            checkInDate: '2023-06-01',
            checkOutDate: '2023-06-05',
            status: 'completed',
            price: 210
        },
        {
            id: '11',
            hostEmail: 'host5@gmail.com',
            guestName: 'Guest 11',
            checkInDate: '2023-05-01',
            checkOutDate: '2023-05-05',
            status: 'completed',
            price: 190
        },
        {
            id: '12',
            hostEmail: 'host1@gmail.com',
            guestName: 'Guest 12',
            checkInDate: '2023-04-01',
            checkOutDate: '2023-04-05',
            status: 'completed',
            price: 230
        },
        {
            id: '13',
            hostEmail: 'host2@gmail.com',
            guestName: 'Guest 13',
            checkInDate: '2023-03-01',
            checkOutDate: '2023-03-05',
            status: 'completed',
            price: 170
        },
        {
            id: '14',
            hostEmail: 'host3@gmail.com',
            guestName: 'Guest 14',
            checkInDate: '2023-02-01',
            checkOutDate: '2023-02-05',
            status: 'completed',
            price: 240
        },
        {
            id: '15',
            hostEmail: 'host4@gmail.com',
            guestName: 'Guest 15',
            checkInDate: '2023-01-01',
            checkOutDate: '2023-01-05',
            status: 'completed',
            price: 260
        },
        {
            id: '16',
            hostEmail: 'host5@gmail.com',
            guestName: 'Guest 16',
            checkInDate: '2022-12-01',
            checkOutDate: '2022-12-05',
            status: 'completed',
            price: 200
        },
        {
            id: '17',
            hostEmail: 'host1@gmail.com',
            guestName: 'Guest 17',
            checkInDate: '2022-11-01',
            checkOutDate: '2022-11-05',
            status: 'completed',
            price: 210
        },
        {
            id: '18',
            hostEmail: 'host2@gmail.com',
            guestName: 'Guest 18',
            checkInDate: '2022-10-01',
            checkOutDate: '2022-10-05',
            status: 'completed',
            price: 220
        },
        {
            id: '19',
            hostEmail: 'host3@gmail.com',
            guestName: 'Guest 19',
            checkInDate: '2022-09-01',
            checkOutDate: '2022-09-05',
            status: 'completed',
            price: 230
        },
        {
            id: '20',
            hostEmail: 'host4@gmail.com',
            guestName: 'Guest 20',
            checkInDate: '2022-08-01',
            checkOutDate: '2022-08-05',
            status: 'completed',
            price: 240
        }
    ],
    getBookingsByHost(hostEmail) {
        return this.bookings.filter(booking => booking.hostEmail === hostEmail);
    },

    getBookingsByMonth(hostEmail) {
        const bookings = this.getBookingsByHost(hostEmail);
        const bookingsByMonth = {};

        bookings.forEach(booking => {
            const month = new Date(booking.checkInDate).toLocaleString('default', { month: 'long' });
            bookingsByMonth[month] = (bookingsByMonth[month] || 0) + 1;
        });

        return bookingsByMonth;
    },

    getEarningsByMonth(hostEmail) {
        const bookings = this.getBookingsByHost(hostEmail);
        const earningsByMonth = {};

        bookings.forEach(booking => {
            const month = new Date(booking.checkInDate).toLocaleString('default', { month: 'long' });
            earningsByMonth[month] = (earningsByMonth[month] || 0) + booking.price;
        });

        return earningsByMonth;
    }
};

export default dataStore;