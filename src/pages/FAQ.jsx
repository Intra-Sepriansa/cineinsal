import React, { useEffect, useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqService from '../services/faqService';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const loadFaqs = async () => {
      const data = await faqService.getAll();
      setFaqs(data);
    };
    loadFaqs();
  }, []);

  return (
    <PageContainer title="Frequently Asked Questions">
      {faqs.map((faq) => (
        <Accordion key={faq.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </PageContainer>
  );
};

export default FAQ;
