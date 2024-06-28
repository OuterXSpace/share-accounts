import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { ITabProps } from './tab.type';

export const Tab: React.FC<ITabProps> = (props) => {
  const { children, onSelect, defaultTab } = props;

  const [selected, setSelected] = useState<string>();

  const handleChange = (index: string) => {
    setSelected(index);
    onSelect?.(index);
  };

  useEffect(() => {
    setSelected(defaultTab);
  }, [defaultTab]);

  if (!children) return null;

  return (
    <div className="rounded-lg border border-[0.5px] border-[rgba(255,255,255,0.2)]">
      <div className="toto-tab-header">
        <ul className="ml-0 rounded-tl-lg rounded-tr-lg text-base py-[35px] px-[8px] bg-dark-2">
          {_.isArray(children) &&
            children.flat()?.map((elem: { props: { name: string }; key: string }) => {
              const style = elem.key === selected ? 'text-primary-light' : 'text-white/50';
              return (
                <li
                  key={elem.key}
                  className={`hover:text-primary-light ${style} relative cursor-pointer inline-block ml-0 p-y-2 mr-8 text-base font-semibold uppercase transition-all duration-500 after:absolute after:content-[''] after:w-[2px] after:h-[16px] after:bg-[rgba(255,255,255,0.4)] after:right-[-16px] after:top-[-5px] after:translate-y-1/2 last:mr-0 last:after:hidden`}
                  onClick={() => handleChange(elem.key)}
                >
                  {elem.props.name}
                </li>
              );
            })}
          {!_.isArray(children) && (
            <li
              key={children?.key}
              className="text-primary-light relative cursor-pointer inline-block ml-0 p-y-2 mr-8 text-base font-semibold uppercase text-white/50 transition-all duration-500 after:absolute after:content-[''] after:w-[2px] after:h-[16px] after:bg-[rgba(255,255,255,0.4)] after:right-[-16px] after:top-[-5px] after:translate-y-1/2 last:mr-0 last:after:hidden"
              onClick={() => handleChange(children?.key)}
            >
              {children?.props?.name}
            </li>
          )}
        </ul>
      </div>
      <div className="w-full bg-white rounded-bl-10 rounded-br-10">
        <div className="text-primary-light">
          {_.isArray(children) ? children.flat().filter((i) => i.key === selected) : children}
        </div>
      </div>
    </div>
  );
};
