import { render, screen } from '@testing-library/react';
import BookingsForm from './BookingsForm';
import { BrowserRouter } from "react-router-dom";

test('Test for bookings form render', () => {
    <BrowserRouter>
        render(<BookingsForm />);
    </BrowserRouter>

    const dateLabel = screen.getByText("Choose Date");
    expect(dateLabel).toBeInTheDocument();

    const dateField = screen.getByTestId("res-date");
    expect(dateField).toBeInTheDocument();

    const timeLabel = screen.getByText("Choose time");
    expect(timeLabel).toBeInTheDocument();

    const timeField = screen.getByTestId("res-time");
    expect(timeField).toBeInTheDocument();

    const guestLabel = screen.getByText("Number of guests");
    expect(guestLabel).toBeInTheDocument();

    const guestField = screen.getByTestId("guests");
    expect(guestField).toBeInTheDocument();

    const occasionLabel = screen.getByText("Occasion");
    expect(occasionLabel).toBeInTheDocument();

    const occasionField = screen.getByTestId("occasion");
    expect(occasionField).toBeInTheDocument();

    const firstnameLabel = screen.getByText("First Name");
    expect(firstnameLabel).toBeInTheDocument();

    const firstnameField = screen.getByText("res-fname");
    expect(firstnameField).toBeInTheDocument();
    
    const lastnameLabel = screen.getByText("Last Name");
    expect(lastnameLabel).toBeInTheDocument();

    const lastnameField = screen.getByText("res-flame");
    expect(lastnameField).toBeInTheDocument();

    const emailLabel = screen.getByText("email");
    expect(emailLabel).toBeInTheDocument();

    const emailField = screen.getByText("email");
    expect(emailField).toBeInTheDocument();

    const submitButton = screen.getByDisplayValue("Make Your reservation");
    expect(submitButton).toBeInTheDocument();
});
