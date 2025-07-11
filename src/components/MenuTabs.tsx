'use client';
import { useEffect, useRef } from 'react';

type Tab = {
    id: string;
    label: string;
};

type Props = {
    selected: string;
    onSelect: (id: string) => void;
};

const tabs: Tab[] = [
    { id: 'all', label: '전체메뉴' },
    { id: 'main-tofu', label: 'MAIN 두부요리' },
    { id: 'main-etc', label: '그외 메인요리' },
    { id: 'side', label: 'SIDE MENU' },
    { id: 'drink', label: '주류' },
];

export default function MenuTabs({ selected, onSelect }: Props) {
    const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

    useEffect(() => {
        const selectedTab = tabRefs.current[selected];
        if (selectedTab) {
            selectedTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }, [selected]);

    return (
        <div className="relative border-b border-black w-full overflow-x-auto overflow-y-hidden sm:overflow-x-visible">
            <div className="flex justify-start sm:justify-center whitespace-nowrap px-2 sm:px-0">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        ref={(el) => (tabRefs.current[tab.id] = el)}
                        onClick={() => onSelect(tab.id)}
                        className={`mx-1 sm:mx-2 px-4 sm:px-6 py-3 text-sm sm:text-base font-bold border border-black border-b-0 -mb-px
  rounded-t-md transition-all duration-300 ease-in-out
  ${selected === tab.id
                                ? 'bg-yellow-100 text-black'
                                : 'bg-transparent text-black opacity-70 hover:opacity-100'}`}
                        style={{
                            borderTopLeftRadius: selected === tab.id ? '4px' : '0',
                            borderTopRightRadius: selected === tab.id ? '4px' : '0',
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}