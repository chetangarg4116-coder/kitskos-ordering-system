import { useState, useEffect } from "react";

function AddonSelector({
  addons = [],
  variants = [],
  comboSelections = [],
  toppings = [],
  baseOptions = [],
  onChange
}) {

  const [selectedAddons, setSelectedAddons] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [instruction, setInstruction] = useState("");
  const [comboChoices, setComboChoices] = useState({});
  const [selectedToppings, setSelectedToppings] = useState([]);
const [selectedBase, setSelectedBase] = useState(null);

useEffect(() => {
  if (onChange) {
    onChange({
      addons: selectedAddons,
      variant: selectedVariant,
      instruction,
      comboChoices,
      toppings: selectedToppings,
      base: selectedBase
    });
  }
}, [
  selectedAddons,
  selectedVariant,
  instruction,
  comboChoices,
  selectedToppings,
  selectedBase
]);
  
const toggleTopping = (topping) => {

  if (selectedToppings.includes(topping)) {

    setSelectedToppings(
      selectedToppings.filter(t => t !== topping)
    );

    return;
  }

  if (selectedToppings.length >= 5) {

    alert("Maximum 5 toppings allowed.");

    return;
  }

  setSelectedToppings([
    ...selectedToppings,
    topping
  ]);

};


const handleComboChange = (title, value) => {

  setComboChoices((prev) => ({
    ...prev,
    [title]: value
  }));

};
const toggleAddon = (addon) => {

  if (addon.prices && !selectedVariant) {
    alert("Please select pizza size first.");
    return;
  }

  const addonWithPrice = {
    ...addon,
    price: addon.prices
      ? addon.prices[selectedVariant.name]
      : addon.price
  };

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
      addonWithPrice
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

{
  addon.prices
    ? (
        selectedVariant
          ? addon.prices[selectedVariant.name]
          : "-"
      )
    : addon.price
}



            </label>

          ))}

        </>

      )}
{comboSelections.length > 0 && (
  <>
    <h4>Choose Combo Items</h4>

    {comboSelections.map((selection, index) => (
      <div
        key={index}
        style={{ marginBottom: "15px" }}
      >
        <strong>{selection.title}</strong>

        <select
          value={
            comboChoices[selection.title] || ""
          }
          onChange={(e) =>
            handleComboChange(
              selection.title,
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "8px"
          }}
        >
          <option value="">
            Select {selection.title}
          </option>

          {selection.options.map((option, i) => (
            <option
              key={i}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    ))}
  </>
)}
{toppings.length > 0 && (

<>

<h4>Choose up to 5 Toppings</h4>

<p>

Selected {selectedToppings.length}/5

</p>

{toppings.map((topping,index)=>(

<label
key={index}
style={{
display:"block",
marginBottom:"5px"
}}
>

<input
type="checkbox"
checked={selectedToppings.includes(topping)}
onChange={()=>
toggleTopping(topping)
}
/>

{" "}

{topping}

</label>

))}

</>

)}
{baseOptions.length > 0 && selectedVariant && (

<>

<h4>Select Pizza Base</h4>

{baseOptions.map((base,index)=>(

<label
key={index}
style={{
display:"block",
marginBottom:"6px"
}}
>

<input
type="radio"
name="pizzaBase"
checked={
selectedBase?.name===base.name
}
onChange={()=>
setSelectedBase({
name:base.name,
price:base.prices[selectedVariant.name]
})
}
/>

{" "}

{base.name}

{" (+₹"}

{base.prices[selectedVariant.name]}

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