'use client'

import React from 'react'

export default function Table({ users,  info} : any) {
  return (
    <table className="border border-black table-auto">
    <thead>
      <tr>
        <th className="border border-slate-400">
          User ID
        </th>
        <th className="border border-slate-400">
          Email
        </th>
        <th className="border border-slate-400">
          Last Game Played
        </th>
        <th className="border border-slate-400">
          Last Time Played
        </th>
      </tr>
    </thead>
    <tbody>
      {
        users.length <= 0 ? (
          <tr className="border border-slate-400">
            <td>
              None
            </td>
          </tr>
        ) : (
          users.map((user : any) => (
            <tr key={user.id}>
              <td className="border border-slate-400">
                {/* <a href={`/dashboard/${user.id}`}>{user.id}</a> */}
                {user.id}
              </td>
              <td className="border border-slate-400">
                {user.email}
              </td>
              <td className="border border-slate-400">
                {user.lastPlayed}
              </td>
              <td className="border border-slate-400">
                {user.lastDate}
              </td>
            </tr>
          ))
        )
      }
    </tbody>
  </table>
  )
}
