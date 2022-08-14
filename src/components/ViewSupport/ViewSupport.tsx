import { useContext } from 'react';
import { HrContext } from '../../providers/HrProvider';

export const ViewSupport = () => {
  const { currentPage, setCurrentPage } = useContext(HrContext);
  const { maxPerPage, setMaxPerPage } = useContext(HrContext);
  const { studentsCount, setStudentsCount } = useContext(HrContext);
  const { totalPages, setTotalPages } = useContext(HrContext);

  const onChangeViewSupport = (currentP: number, maxPerP: number) => {
    setCurrentPage(currentP);
    setMaxPerPage(maxPerP);
  };

  const options = [
    { value: 3, label: '3' },
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
    { value: 40, label: '40' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: studentsCount, label: studentsCount },
  ];

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    onChangeViewSupport(
      studentsCount === Number(maxPerPage) ? 1 : Number(currentPage),
      Number(event.currentTarget.value),
    );
    setCurrentPage(1);
  };

  return (
    <div className="footer-container">
      <p className="elements-status">Studentów na stronie</p>
      <select
        className="select-footer"
        name=""
        id=""
        value={Number(maxPerPage)}
        onChange={handleChange}
      >
        {options.map((option) =>
          studentsCount > option.value ? (
            <option value={Number(option.value)} key={Number(option.value)}>
              {Number(option.label)}
            </option>
          ) : null,
        )}
        <option value={Number(studentsCount)} key={Number(studentsCount)}>
          {Number(studentsCount)}
        </option>
      </select>

      <p className="elements-status" style={{ marginLeft: '0px' }}>{`/${studentsCount}`}</p>
      <p className="elements-status">{` Strona ${currentPage}/${totalPages}`}</p>
      <p className="elements-switch">
        <button
          className="left-switch"
          type="submit"
          onClick={() =>
            onChangeViewSupport(currentPage > 1 ? Number(currentPage) - 1 : 1, Number(maxPerPage))
          }
        >
          {' '}
        </button>
      </p>
      <p className="elements-switch">
        <button
          className="right-switch"
          type="submit"
          onClick={() =>
            onChangeViewSupport(
              currentPage < totalPages ? Number(currentPage) + 1 : Number(totalPages),
              Number(maxPerPage),
            )
          }
        >
          {' '}
        </button>
      </p>
    </div>
  );
};
