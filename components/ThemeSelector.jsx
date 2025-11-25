'use client';
export default function ThemeSelector({ selected, setSelected }) {
  const themes = ['nature', 'food', 'adventure'];

  return (
    <div className="flex gap-4">
      {themes.map((theme) => (
        <button
          key={theme}
          type="button"
          onClick={() => setSelected(theme)}
          className={`px-4 py-2 rounded ${selected === theme ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white' : 'border'}`}
        >
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </button>
      ))}
    </div>
  );
}
