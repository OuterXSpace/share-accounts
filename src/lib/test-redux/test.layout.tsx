import React, { useEffect } from 'react';
import { DynamicLayoutProps } from '../../layouts/dynamic-layout/dynamic.type';
import { DynamicTheme } from '../../next-core-ui';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTestSlide, reducer, selectApp, sliceKey } from './slice';
import { useInjectReducer } from '../../utils';

export const DynamicLayout: React.FC<DynamicLayoutProps> = (props) => {
  const { systemConfig, slug } = props;

  useInjectReducer({ key: sliceKey, reducer });

  const dispatch = useDispatch();

  const appData = useSelector(selectApp);

  console.log('hack', appData);

  useEffect(() => {
    dispatch(fetchTestSlide('pikachu'));
  }, [dispatch]);

  return <DynamicTheme systemConfig={systemConfig} slug={slug} />;
};
