const DateRange = ({ startYear, endYear, id }: { startYear: string, endYear: string, id: string }) => {
    if (!startYear) {
        return <p id={id} className="sub-content"></p>;
    }

    const start = new Date(startYear);
    const end = new Date(endYear);
    return (
        <p id={id} className="sub-content">
            {start.toLocaleString('default', { month: 'short' })}, {start.getFullYear()} - {end ? end.toLocaleString('default', { month: 'short' }) + ', ' + end.getFullYear() : 'Present'}
        </p>
    );
};

export default DateRange;
