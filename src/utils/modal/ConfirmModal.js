import { useEffect, useState } from 'react'

/**
 * Primary UI component for user interaction
 */
export const ConfirmModal = ({
  content = '',
  onOk = () => {},
  onCancel = () => {},
  isOpen: parentIsOpen = false,
  lastUpdatedAt,
  options = {},
}) => {
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    setShowModal(parentIsOpen)
    // eslint-disable-next-line
  }, [lastUpdatedAt])

  if (!showModal) return null

  return (
    <>
      <div
        tabIndex={-1}
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-40 md:inset-0 h-modal md:h-full justify-center items-center flex"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/*header*/}
            {options.title ? (
              <div className="flex items-start justify-between p-5 pb-3 border-b border-solid border-slate-200 rounded-t">
                <h3 className="flex items-center text-xl font-semibold">
                  {options.title}
                  {/* {init && <img src={svgLoading} className="inline w-6 h-6 ml-3 text-white animate-spin" />} */}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={onCancel}
                >
                  <i class="icofont-close-circled"></i>
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={onCancel}
              >
                <i class="icofont-close-circled"></i>
              </button>
            )}
            <div className="p-6 text-center">
              <i className="icofont-info-circle mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" />
              {typeof content === 'string' ? (
                <h3 className="mb-5 text-lg font-normal text-gray-800">
                  {<span dangerouslySetInnerHTML={{ __html: content }} />}
                </h3>
              ) : (
                content
              )}
              {options.titleYes !== false && (
                <button
                  disabled={options.confirmDisabled}
                  type="button"
                  onClick={onOk}
                  className={`${
                    options.confirmDisabled && 'cursor-not-allowed'
                  } text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2`}
                >
                  {options.titleYes || `Yes, I'm sure`}
                </button>
              )}
              {options.titleNo !== false && (
                <button
                  type="button"
                  onClick={onCancel}
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  {options.titleNo || `No, cancel`}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-30 bg-black"></div>
    </>
  )
}
