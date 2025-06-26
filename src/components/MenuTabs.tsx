// src/components/MenuTabs.tsx
'use client';

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
    { id: 'main-tofu', label: 'Main두부요리' },
    { id: 'main-etc', label: '기타메인요리' },
    { id: 'side', label: '사이드메뉴' },
    { id: 'drink', label: '주류' },
];

export default function MenuTabs({ selected, onSelect }: Props) {
    return (
        <div className="relative border-b border-black w-full overflow-x-auto overflow-y-hidden sm:overflow-x-visible">
            <div className="flex justify-start sm:justify-center whitespace-nowrap px-2 sm:px-0">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onSelect(tab.id)}
                        className={`mx-1 sm:mx-2 px-4 sm:px-6 py-3 text-sm sm:text-base font-bold border border-black border-b-0 -mb-px transition
                    ${selected === tab.id
                                ? 'bg-white text-black'
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