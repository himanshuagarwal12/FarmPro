import mongoose from 'mongoose';

var DiscountCodesSchema = mongoose.Schema(
{
    code: { type: String, require: true, unique: true },
    isPercent: { type: Boolean, require: true, default: true },
    amount: { type: Number, required: true },
    expireDate: { type: String, require: true, default: '' },
    isActive: { type: Boolean, require: true, default: true }
});
DiscountCodesSchema.pre('save', function (next) {
var currentDate = new Date();
this.updated_at = currentDate;
if (!this.created_at) {
this.created_at = currentDate;
}
next();
});
var Discounts = mongoose.model('DiscountCodes', DiscountCodesSchema);
export default Discounts;