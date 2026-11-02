import React, { useState } from 'react';
import { X, Plus, Trash2, Save, RotateCcw, Edit3, Image as ImageIcon } from 'lucide-react';
import { LaptopProduct } from '../types';

interface ProductEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  laptops: LaptopProduct[];
  onSaveLaptops: (updated: LaptopProduct[]) => void;
  onResetToDefaults: () => void;
  initialEditLaptop?: LaptopProduct | null;
}

export const ProductEditorModal: React.FC<ProductEditorModalProps> = ({
  isOpen,
  onClose,
  laptops,
  onSaveLaptops,
  onResetToDefaults,
  initialEditLaptop
}) => {
  const [editingId, setEditingId] = useState<string | null>(initialEditLaptop?.id || null);
  const [formData, setFormData] = useState<Partial<LaptopProduct>>(
    initialEditLaptop || {
      name: '',
      brand: 'HP',
      processor: '',
      ram: '',
      storage: '',
      graphics: '',
      display: '',
      price: 35000,
      condition: 'Grade A (Excellent)',
      image: '/src/assets/images/laptop_hp_pavilion_1793649741810.jpg',
      batteryHealth: '3 Hours Backup',
      description: '',
      inStock: true,
      warranty: '7-Day Checking Warranty'
    }
  );

  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSelectToEdit = (laptop: LaptopProduct) => {
    setEditingId(laptop.id);
    setFormData(laptop);
  };

  const handleNewLaptop = () => {
    const newId = `laptop-${Date.now()}`;
    const newLaptop: LaptopProduct = {
      id: newId,
      name: 'New Laptop Model',
      brand: 'HP',
      processor: 'Intel Core i5 6th Gen',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      graphics: 'Intel Integrated Graphics',
      display: '14-inch FHD Display',
      price: 35000,
      condition: 'Grade A (Excellent)',
      image: '/src/assets/images/laptop_lenovo_thinkpad_1793649742500.jpg',
      batteryHealth: '3+ Hours Backup',
      description: 'Tested and verified quality laptop for work and study.',
      inStock: true,
      warranty: '7-Day Checking Warranty'
    };
    setEditingId(newId);
    setFormData(newLaptop);
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    let updatedList: LaptopProduct[];
    const exists = laptops.some((l) => l.id === editingId);

    if (exists) {
      updatedList = laptops.map((l) => (l.id === editingId ? ({ ...l, ...formData } as LaptopProduct) : l));
    } else {
      updatedList = [{ ...formData, id: editingId || `laptop-${Date.now()}` } as LaptopProduct, ...laptops];
    }

    onSaveLaptops(updatedList);
    setNotification('Laptop successfully saved to catalog!');
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this laptop from your catalog?')) {
      const updated = laptops.filter((l) => l.id !== id);
      onSaveLaptops(updated);
      if (editingId === id) {
        setEditingId(null);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#0c142b] border border-slate-700 shadow-2xl text-slate-100 my-8 overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-[#080d1e]">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-blue-400" />
              <span>Catalog & Inventory Manager</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Easily update product names, prices (PKR), specifications, and images in real-time.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {notification && (
          <div className="bg-emerald-950 border-b border-emerald-800 text-emerald-300 text-xs px-5 py-2 font-medium">
            {notification}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[75vh] overflow-y-auto">
          {/* Left Column: Product List */}
          <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-slate-800 bg-[#091024] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Current Products ({laptops.length})
              </span>
              <button
                type="button"
                onClick={handleNewLaptop}
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Laptop</span>
              </button>
            </div>

            <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-1">
              {laptops.map((l) => (
                <div
                  key={l.id}
                  onClick={() => handleSelectToEdit(l)}
                  className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between gap-2 ${
                    editingId === l.id
                      ? 'bg-blue-600/20 border-blue-500 text-white'
                      : 'bg-[#101933] border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="truncate">
                    <div className="font-semibold truncate">{l.name}</div>
                    <div className="text-[11px] text-slate-400">Rs. {l.price.toLocaleString()} · {l.brand}</div>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(l.id);
                    }}
                    className="text-slate-500 hover:text-rose-400 p-1"
                    title="Delete laptop"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80">
              <button
                type="button"
                onClick={() => {
                  if (confirm('Reset catalog back to initial standard products?')) {
                    onResetToDefaults();
                    setNotification('Catalog reset to initial defaults.');
                    setTimeout(() => setNotification(null), 3000);
                  }
                }}
                className="w-full flex items-center justify-center gap-1.5 py-2 text-[11px] text-slate-400 hover:text-slate-200 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Factory Defaults</span>
              </button>
            </div>
          </div>

          {/* Right Column: Edit Form */}
          <div className="md:col-span-8 p-6 bg-[#0c142b]">
            {editingId ? (
              <form onSubmit={handleSaveForm} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <h3 className="text-sm font-semibold text-white">Edit Laptop Details</h3>
                  <span className="text-xs text-blue-400 font-mono">ID: {editingId}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Model Name */}
                  <div className="sm:col-span-2">
                    <label className="text-xs text-slate-300 font-medium block mb-1">Laptop Model Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name || ''}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. HP Pavilion G6"
                      className="w-full rounded-lg bg-[#141f3d] border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Brand */}
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">Brand</label>
                    <select
                      value={formData.brand || 'HP'}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value as any })}
                      className="w-full rounded-lg bg-[#141f3d] border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="HP">HP</option>
                      <option value="Lenovo">Lenovo</option>
                      <option value="Dell">Dell</option>
                      <option value="Apple">Apple</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Price */}
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">Price in PKR (Rs.)</label>
                    <input
                      type="number"
                      required
                      value={formData.price || 0}
                      onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                      placeholder="28000"
                      className="w-full rounded-lg bg-[#141f3d] border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Processor */}
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">Processor (CPU)</label>
                    <input
                      type="text"
                      value={formData.processor || ''}
                      onChange={(e) => setFormData({ ...formData, processor: e.target.value })}
                      placeholder="e.g. Intel Core i7 2nd Generation"
                      className="w-full rounded-lg bg-[#141f3d] border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* RAM */}
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">RAM</label>
                    <input
                      type="text"
                      value={formData.ram || ''}
                      onChange={(e) => setFormData({ ...formData, ram: e.target.value })}
                      placeholder="e.g. 4GB DDR3 RAM"
                      className="w-full rounded-lg bg-[#141f3d] border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Storage */}
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">Storage</label>
                    <input
                      type="text"
                      value={formData.storage || ''}
                      onChange={(e) => setFormData({ ...formData, storage: e.target.value })}
                      placeholder="e.g. 320GB HDD or 256GB SSD"
                      className="w-full rounded-lg bg-[#141f3d] border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Graphics */}
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">Graphics (GPU)</label>
                    <input
                      type="text"
                      value={formData.graphics || ''}
                      onChange={(e) => setFormData({ ...formData, graphics: e.target.value })}
                      placeholder="e.g. 2GB Graphics"
                      className="w-full rounded-lg bg-[#141f3d] border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Display */}
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">Display Size</label>
                    <input
                      type="text"
                      value={formData.display || ''}
                      onChange={(e) => setFormData({ ...formData, display: e.target.value })}
                      placeholder="e.g. 15.6-inch Display"
                      className="w-full rounded-lg bg-[#141f3d] border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Battery Backup */}
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">Battery Health / Backup</label>
                    <input
                      type="text"
                      value={formData.batteryHealth || ''}
                      onChange={(e) => setFormData({ ...formData, batteryHealth: e.target.value })}
                      placeholder="e.g. 3+ Hours Backup"
                      className="w-full rounded-lg bg-[#141f3d] border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Image URL */}
                  <div className="sm:col-span-2">
                    <label className="text-xs text-slate-300 font-medium block mb-1">Image URL / Local Asset</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={formData.image || ''}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        placeholder="/src/assets/images/laptop_hp_pavilion_1793649741810.jpg"
                        className="w-full rounded-lg bg-[#141f3d] border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="sm:col-span-2">
                    <label className="text-xs text-slate-300 font-medium block mb-1">Overview & Features</label>
                    <textarea
                      rows={2}
                      value={formData.description || ''}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Overview for customers..."
                      className="w-full rounded-lg bg-[#141f3d] border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-900 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8 text-slate-400">
                <Edit3 className="w-10 h-10 text-slate-600 mb-3" />
                <h4 className="text-sm font-semibold text-slate-300">Select a laptop to edit</h4>
                <p className="text-xs text-slate-500 max-w-sm mt-1">
                  Choose any laptop from the left sidebar to change its price, name, specifications, or click &quot;Add Laptop&quot; to create a new model.
                </p>
                <button
                  type="button"
                  onClick={handleNewLaptop}
                  className="mt-4 px-4 py-2 rounded-lg text-xs font-medium text-white bg-blue-600 hover:bg-blue-500"
                >
                  Add New Laptop
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
