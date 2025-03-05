import EquipmentCard from "./EquipmentCard";

const EquipmentSection = ({ equipments }) => {
  console.log(equipments);

  return (
    <section className="my-12 grid grid-cols-3 gap-2.5">
      {equipments?.map((equipment) => (
        <EquipmentCard key={equipment._id} equipment={equipment} />
      ))}
    </section>
  );
};

export default EquipmentSection;
