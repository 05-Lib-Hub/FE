import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Description from '../project/detail/Description';
import MenuIcon from './icons/MenuIcon';
import Dropdown from './dropdown/Dropdown';
import KeywordList from '../project/detail/KeywordList';

export default function Acordian({ lib, index, expandedList, handleChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const editLibrary = () => {};

  const removeLibrary = () => {
    confirm('삭제하시겠습니까?') && alert('삭제되었습니다.');
  };

  return (
    <Accordion
      expanded={expandedList.includes(index)}
      onChange={handleChange(index)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <div className="w-full flex items-center">
          <div className="h-full flex-grow flex items-center">
            <Typography
              sx={{
                width: '33%',
                flexShrink: 0,
                fontSize: '1.5rem',
                fontWeight: '1.2rem',
              }}
            >
              {lib.libraryname}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {lib.version}
            </Typography>
          </div>
          <div className="absolute right-10 pt-1">
            {expandedList.includes(index) && (
              <button className="relative" onClick={handleMenu}>
                <MenuIcon className="w-6 h-6 mr-2" />
                {menuOpen && (
                  <Dropdown
                    className="w-24 text-sm"
                    edit={editLibrary}
                    remove={removeLibrary}
                  />
                )}
              </button>
            )}
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <KeywordList keywordList={lib.libraryHashtags} />
      </AccordionDetails>
      <AccordionDetails>
        <Description>{lib.usecase}</Description>
      </AccordionDetails>
    </Accordion>
  );
}
