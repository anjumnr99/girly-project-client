

const Brand = ({brand}) => {
    const {_id,image,name} = brand || {};
    return (
        <div>
            {name}
        </div>
    );
};

export default Brand;