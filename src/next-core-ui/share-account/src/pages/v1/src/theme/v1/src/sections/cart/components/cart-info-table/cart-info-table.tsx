import { Table } from 'flowbite-react';
import { ICartInfoTableProps } from './cart-info-table.type';
import Link from 'next/link';
import Image from 'next/image';
import IonIcon from '@reacticons/ionicons';
import { FormattedCurrency } from '../../../../../../../../../../../../../components';

export const CartInfoTable: React.FC<ICartInfoTableProps> = (props) => {
  const { items, removeItemToCart, increaseItemQuantity, decreaseItemQuantity, onChangeItemQuantity } = props;

  const currency = 'VNĐ';
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow">
            <Table>
              <Table.Head>
                <Table.HeadCell>Sản phẩm</Table.HeadCell>
                <Table.HeadCell className="min-w-[180px]">Giá</Table.HeadCell>
                <Table.HeadCell>Số lượng</Table.HeadCell>
                <Table.HeadCell className="min-w-[180px]">Tạm tính</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {items.map((item) => {
                  const { id, imageUrl, imageAlt, title, linkUrl, durationLabel, totalPrice, originalPrice, quantity } =
                    item;
                  return (
                    <Table.Row className="bg-white" key={id}>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 flex flex-row gap-4 items-center">
                        <div className="relative">
                          <button className="absolute top-[-5px] left-[-5px]" onClick={() => removeItemToCart(id)}>
                            <IonIcon
                              className="text-black text-[20px] bg-white rounded-full"
                              name="close-circle-outline"
                            />
                          </button>
                          <Link href={linkUrl}>
                            <Image
                              src={imageUrl}
                              alt={imageAlt}
                              width={75}
                              height={75}
                              className="min-w-[75px] min-h-[75px]"
                            />
                          </Link>
                        </div>
                        <Link href={linkUrl} className="text-red-500">
                          {title} ({durationLabel})
                        </Link>
                      </Table.Cell>
                      <Table.Cell>
                        {' '}
                        <strong>
                          <FormattedCurrency value={originalPrice} isColored={false} /> {currency}
                        </strong>
                      </Table.Cell>
                      <Table.Cell>
                        <div className="flex flex-row h-full">
                          <button
                            className="px-[10px] border h-[35px] w-[3rem]"
                            onClick={() => decreaseItemQuantity(id)}
                          >
                            -
                          </button>
                          <div className="w-[4rem] flex items-center justify-center">
                            <input
                              type="number"
                              value={quantity}
                              className="px-[10px] border h-[35px] border-gray-200 w-full text-center"
                              onChange={(e) => onChangeItemQuantity(id, Number(e.target.value))}
                            />
                          </div>
                          <button
                            className="px-[10px] border h-[35px] w-[3rem]"
                            onClick={() => increaseItemQuantity(id)}
                          >
                            +
                          </button>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        {' '}
                        <strong>
                          <FormattedCurrency value={totalPrice} isColored={false} /> {currency}
                        </strong>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
