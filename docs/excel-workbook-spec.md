# Excel Workbook Spec & System Mapping

## Source of truth sheets
- `PO`: PO print layout template for print/PDF.
- `PR-HK`: maps to `PurchaseRequisition`.
- `Summary-HK`: maps to `PurchaseOrder` + `PurchaseOrderLine` history.
- `Item Code`: maps to `Item` + `Vendor` + `VendorItem`.
- `工作表1`: latest unit price reference by `Item Code`.

## Key mapping rules
- VendorItem uniqueness: `Region + Item Code + Vendor Name` (implemented as region+itemCode+vendorId).
- PR duplicate check: `PR No.`.
- Summary-HK duplicate check: `P/O No. + Item Code + Vendor Name`.
- Item Code duplicate check: `Region + Item Code + Vendor Name`.
- 工作表1 duplicate check: `Item Code`.

## Workflow mapping
- Purchase Request status: Draft → Submitted → Under Review → Approved → PO Generated → Closed; rejection from Submitted/Under Review.
- PO status: Draft / Generated / Cancelled / Closed.
- Over-budget PO requires reason and approval log.

## MVP modules
Auth/RBAC, Dashboard summary, Item/Vendor/PR/Request/Approval/PO management, PO print/PDF, Excel import preview+confirm, Reports, Audit Log.
