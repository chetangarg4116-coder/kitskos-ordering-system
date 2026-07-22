import { useState, useEffect } from "react";

function AddonSelector({
  addons = [],
  variants = [],
  onChange
}) {

  const [selectedAddons, setSelectedAddons] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [instruction, setInstruction] = useState("");

  useEffect(() => {
    if (onChange) {
      onChange({
        addons: selectedAddons,
        variant: selectedVariant,
        instruction
      });
    }
  }, [selectedAddons, selectedVariant, instruction]);

  const toggleAddon = (addon) => {

    const exists = selectedAddons.find(
      (a) => a.name === addon.name
    );

    if (exists) {
      setSelectedAddons(
        selectedAddons.filter(
          (a) => a.name !== addon.name
        )
      );
    } else {
      setSelectedAddons([
        ...selectedAddons,
        addon
      ]);
    }

  };

  return (

    <div style={{ marginTop: "10px" }}>

      {variants.length > 0 && (

        <>

          <h4>Select Size</h4>

          {variants.map((variant, index) => (

            <label
              key={index}
              style={{
                display: "block",
                marginBottom: "6px"
              }}
            >

              <input
                type="radio"
                name="variant"
                checked={
                  selectedVariant?.name === variant.name
                }
                onChange={() =>
                  setSelectedVariant(variant)
                }
              />

              {" "}

              {variant.name}

              {" - ₹"}

              {variant.price}

            </label>

          ))}

        </>

      )}

      {addons.length > 0 && (

        <>

          <h4>Add Extras</h4>

          {addons.map((addon, index) => (

            <label
              key={index}
              style={{
                display: "block",
                marginBottom: "6px"
              }}
            >

              <input
                type="checkbox"
                checked={
                  selectedAddons.some(
                    (a) => a.name === addon.name
                  )
                }
                onChange={() =>
                  toggleAddon(addon)
                }
              />

              {" "}

              {addon.name}

              {" (+₹"}

              {addon.price}

              {")"}

            </label>

          ))}

        </>

      )}

      <h4>Special Instructions</h4>

      <textarea
        rows="3"
        placeholder="Example: No Onion / Extra Spicy / Less Sugar"
        value={instruction}
        onChange={(e) =>
          setInstruction(e.target.value)
        }
        style={{
          width: "100%",
          borderRadius: "8px",
          padding: "8px"
        }}
      />

    </div>

  );

}

export default AddonSelector;