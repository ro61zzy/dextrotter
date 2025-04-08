import { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

interface Token {
  name: string;
  symbol: string;
  address: string;
  decimals: number;
  logoURI: string;
}

const TokenSelector = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: Token | null;
  onChange: (token: Token | null) => void;
}) => {
  const [tokens, setTokens] = useState<Token[]>([]);


    const fetchTokens = async () => {
        const res = await fetch("https://api.1inch.dev/swap/v5.2/1/tokens", {
          method: "GET",
          headers: {
            Authorization: `Bearer Bj5D2OvWdfBa3o4l28BDdQiwAdcoWbnt`, // Replace with your correct API key
            "accept": "application/json",
          },
        });
      
        if (!res.ok) {
          throw new Error("Failed to fetch tokens");
        }
      
        const data = await res.json();
        setTokens(data.tokens); // Update with the actual token data structure
      };
      
      
      


  return (
    <Autocomplete
      options={tokens}
      getOptionLabel={(option) => `${option.symbol} - ${option.name}`}
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      renderOption={(props, option) => (
        <li {...props}>
          <img
            src={option.logoURI}
            alt={option.symbol}
            width={20}
            style={{ marginRight: 8 }}
          />
          {option.symbol} - {option.name}
        </li>
      )}
      renderInput={(params) => <TextField {...params} label={label} />}
      isOptionEqualToValue={(option, value) => option.address === value.address}
    />
  );
};
 
export default TokenSelector