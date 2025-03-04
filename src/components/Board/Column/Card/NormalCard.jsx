import React, { useState } from 'react';
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'; // Vòng tròn rỗng
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Vòng tròn với dấu check

const CARD_HEIGHT = (theme) => theme.trelloCustom.cardHeight

const sxCustom = {
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  height: CARD_HEIGHT,
  width: '220px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  bgcolor: '#EDEDED',
  cursor: 'pointer',
  p: 2,
  transition: 'all 0.3s ease',
  '&:hover': {
    bgcolor: '#c8d6e5',
  },
  '&:hover .checkBox': {
    display: 'block',
  },
  

}
function NormalCard({card}) {
  if (!card || !card.name) {
    return null // Hoặc có thể hiển thị placeholder
  }
  // const dynamicStyles = {
  //   backgroundColor: card.isImportant ? 'yellow' : 'white', // Ví dụ: đổi màu nếu card quan trọng
  //   ...sxCustom, // Kế thừa các style cơ bản
  // }

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Box sx={sxCustom}>
      <Checkbox className='checkBox'
      icon={<RadioButtonUncheckedIcon />}
      checkedIcon={<CheckCircleIcon />}
      checked = {isChecked}
      onChange={handleCheckboxChange}
      sx={{
        display: 'none', // Ẩn ban đầu
        ...(isChecked && {
        display: 'block', // Hiện khi được chọn, kể cả không hover
        }),
    }}
    />
      {card.name || 'No name'}
    </Box>
  );
}

NormalCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired, // `name` phải là chuỗi
  }).isRequired,
};

export default NormalCard