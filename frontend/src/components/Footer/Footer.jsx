import React from 'react'

const Footer = ({ content }) => {
  return (
    <div className="bg-black text-white">
      <div className="flex p-8 justify-around">
        {content?.items &&
          content.items.map((item, itemIndex) => (
            <div className="flex flex-col" key={itemIndex}>
              <p className="text-[20px] mb-2 ">{item?.title}</p>
              {item?.list &&
                item.list.map((listItem, listIndex) => (
                  <a
                    href={listItem?.path}
                    key={listIndex}
                    className="hover:underline text-sm mb-1"
                  >
                    {listItem?.label}
                  </a>
                ))}
            </div>
          ))}
      </div>
      <p className="text-sm text-white text-center py-4">
        {content?.footerText}
      </p>
    </div>
  )
}

export default Footer
