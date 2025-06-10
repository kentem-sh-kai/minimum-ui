/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { Select } from '../ui/Select'; 

const containerStyle = css`
  width: 100%;
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: sans-serif;
`;

const countries = [
  { value: 'jp', label: '日本' },
  { value: 'us', label: 'アメリカ合衆国' },
  { value: 'gb', label: 'イギリス' },
];

const SelectExample = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  return (
    <div css={containerStyle}>
      <h2>国を選択してください</h2>
      
      <Select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="" disabled>
          選択してください...
        </option>
        {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.label}
          </option>
        ))}
      </Select>
      
      {/* (省略) */}
    </div>
  );
};

export default SelectExample;