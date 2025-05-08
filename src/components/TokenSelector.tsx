import { useState, useEffect } from "react";
import axios from "axios";
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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTokens = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("/api/tokens"); 
        const tokenMap = response.data;

        const tokenList = Object.values(tokenMap) as Token[];

        setTokens(tokenList);
      } catch (err: any) {
        console.error("Error fetching tokens:", err);
        setError("Failed to load tokens.");
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
  }, []);

  return (
    <div>
      {loading && <div>Loading tokens...</div>}
      {error && <div>{error}</div>}
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
        isOptionEqualToValue={(option, value) => option.address === value?.address}
      />
    </div>
  );
};

export default TokenSelector;
