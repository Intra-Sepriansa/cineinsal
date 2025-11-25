import React, { useEffect, useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import DataTable from '../components/ui/DataTable';
import subscriptionService from '../services/subscriptionService';
import { Chip } from '@mui/material';

const BillingHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      const h = await subscriptionService.getBillingHistory();
      setHistory(h);
    };
    loadHistory();
  }, []);

  const columns = [
    { field: 'date', headerName: 'Date', renderCell: (row) => new Date(row.date).toLocaleDateString() },
    { field: 'amount', headerName: 'Amount', renderCell: (row) => `$${row.amount}` },
    { field: 'plan', headerName: 'Plan' },
    {
      field: 'status',
      headerName: 'Status',
      renderCell: (row) => (
        <Chip
          label={row.status}
          color={row.status === 'paid' ? 'success' : 'error'}
          size="small"
        />
      ),
    },
    { field: 'invoiceId', headerName: 'Invoice ID' },
  ];

  return (
    <PageContainer title="Billing History">
      <DataTable columns={columns} data={history} />
    </PageContainer>
  );
};

export default BillingHistory;
