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
import useClickOutside from '../../hooks/useClickOutside';
import { deleteLib } from '../../service/axios/library';
import { useNavigate } from 'react-router-dom';

export default function Acordian({
  projectName,
  lib,
  index,
  expandedList,
  handleChange,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useClickOutside(() => setMenuOpen(false));
  const navigate = useNavigate();

  const handleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const editLibrary = () => {
    navigate(`${projectName}/library/edit/${lib.libraryId}`);
  };

  const removeLibrary = async () => {
    if (confirm('삭제하시겠습니까?')) {
      const res = await deleteLib(lib.libraryId);
      res && alert('삭제되었습니다.');
      window.location.reload();
    }
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
              <button className="relative" onClick={handleMenu} ref={ref}>
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
      {lib.libraryHashtags && lib.libraryHashtags.length !== 0 && (
        <AccordionDetails>
          <KeywordList keywordList={lib.libraryHashtags} />
        </AccordionDetails>
      )}
      {lib.description && (
        <AccordionDetails>
          <Description>{lib.description}</Description>
        </AccordionDetails>
      )}
    </Accordion>
  );
}
