import React from 'react';
import { PaginatorLine } from '../paginator';

function Paginator({ inboxQuery, notifications, setInboxQuery }) {
  const activePage = inboxQuery.page || notifications.pagination?.page;
  const maxPage = notifications.pagination?.pages;
  const changeToPage = (value) => {
    setInboxQuery(
      {
        ...inboxQuery,
        page: value,
      },
      'pushIn',
    );
  };

  return (
    <PaginatorLine
      activePage={activePage}
      setPageFn={changeToPage}
      lastPage={maxPage}
      className="flex items-center justify-center pa4"
    />
  );
}

export default Paginator;
