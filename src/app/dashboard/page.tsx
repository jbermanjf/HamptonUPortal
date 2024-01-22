import Table from '@/components/Table';
import { getAllUsers, getData } from '@/firebase'
import { useSearchParams } from 'next/navigation';
import React from 'react'

export default async function Dashboard() {
  const users = await getAllUsers();

  return (
    <div>
      <Table users={users} />
    </div>
  )
}
