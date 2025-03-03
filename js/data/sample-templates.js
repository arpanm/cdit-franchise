// Sample data templates for Excel imports

const categoryTemplate = [
    { id: 'CAT001', name: 'Electronics', master: '', description: 'Electronic devices and accessories', status: 'Active' },
    { id: 'CAT002', name: 'Home Appliances', master: 'CAT001', description: 'Household electrical appliances', status: 'Active' }
];

const productTemplate = [
    { id: 'PRD001', name: 'Smart TV', category: 'Electronics', price: 599.99, status: 'Active' },
    { id: 'PRD002', name: 'Refrigerator', category: 'Home Appliances', price: 899.99, status: 'Active' }
];

const warrantyTemplate = [
    { id: 'WAR001', type: 'Standard', duration: '12', description: '1 Year Standard Warranty', status: 'Active' },
    { id: 'WAR002', type: 'Extended', duration: '24', description: '2 Years Extended Warranty', status: 'Active' }
];

function generateSampleExcel(type) {
    let template;
    switch(type) {
        case 'categories':
            template = categoryTemplate;
            break;
        case 'products':
            template = productTemplate;
            break;
        case 'warranty':
            template = warrantyTemplate;
            break;
        default:
            return null;
    }
    
    const ws = XLSX.utils.json_to_sheet(template);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, type);
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${type}-template.xlsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}