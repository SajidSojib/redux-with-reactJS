
const Stats = ({totalCount: count}: {totalCount: number}) => {
    return (
        <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-md w-fit">
            <span className="text-3xl font-semibold min-w-10 text-center">
                Total count: {count}
            </span>
        </div>
    );
};

export default Stats;